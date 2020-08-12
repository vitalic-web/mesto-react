import React from 'react';

/**
 * Компонент создания карточки
 * @param link - ссылка на картинку
 * @param name - название места
 * @param likes - количество лайков
 * @param onCardClick - параметр для передачи данных карточки в компонент ImagePopup
 * @returns {JSX.Element} - возвращает разметку карточки
 * @constructor
 */

function Card({link, name, likes, onCardClick}) {

  // функция для передачи параметров текущей карточки для открытия картинки в полный размер
  function handleClick() {
    onCardClick(name, link, true);
  }

  return (
    <div className="element">
      <img className="element__image"
           src="#"
           alt=""
           style={{
             backgroundImage: `url(${link})`,
             backgroundPosition: "center",
             backgroundSize: "cover"
           }}
           onClick={handleClick}
      />
      {/*element__delete_hidden добавляется если карточка не моя*/}
      <button className="element__delete" type="button"/>
      <div className="element__title">
        <h2 className="element__title-text">{name}</h2>
        <div className="element__like-container">
          <button className="element__title-like" type="button"/>
          <div className="element__like-amount">{likes}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;