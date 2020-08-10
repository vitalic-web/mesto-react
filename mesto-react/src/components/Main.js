import React, {useState, useEffect} from 'react';
import {api} from '../utils/Api.js';
import Card from './Card';

/**
 * Компонент раздела main
 * @param onEditProfile - попап редактирования профиля
 * @param onAddPlace - попап добавления места
 * @param onEditAvatar - попап редактирования аватара
 * @param onCardClick - передача параметра в компонент Card
 * @returns {JSX.Element} - возврат разметки содержимого раздела main
 * @constructor
 */

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  // закрука информации с сервера
  useEffect(() => {
    api.getProfileInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  })

  // выгрузка карточек с сервера
  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(
          res.map(item =>
            <Card key={item._id} link={item.link} name={item.name} likes={item.likes.length} onCardClick={onCardClick}/>
          )
        )
      })
      .catch(err => console.log(err));
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img className="profile__avatar" src="" alt=""
               style={{ backgroundImage: `url(${userAvatar})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"}}/>
          <div className="profile__avatar-editor" onClick={onEditAvatar}></div>
          <div className="profile__author">
            <div className="profile__title">
              <h1 className="profile__title-name">{userName}</h1>
              <button className="profile__title-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements" aria-label="Элементы">{cards}</section>

    </main>
  )
}

export default Main;