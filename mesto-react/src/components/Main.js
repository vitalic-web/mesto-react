import React from 'react';
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info">
          <img className="profile__avatar" src="../images/profile__avatar.jpg" alt="аватар"/>
          <div className="profile__avatar-editor" onClick={onEditAvatar}></div>
          <div className="profile__author">
            <div className="profile__title">
              <h1 className="profile__title-name">Жак-Ив Кусто</h1>
              <button className="profile__title-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <ImagePopup/>

      <section className="elements" aria-label="Элементы"></section>

      <template id="element-template">
        <>
          <div className="element">
            <img className="element__image" src="#"
                 alt=""/>
            <button className="element__delete element__delete_hidden" type="button"></button>
            <div className="element__title">
              <h2 className="element__title-text">Название места</h2>
              <div className="element__like-container">
                <button className="element__title-like" type="button"></button>
                <div className="element__like-amount">14</div>
              </div>
            </div>
          </div>
        </>
      </template>

    </main>
  )
}

export default Main;