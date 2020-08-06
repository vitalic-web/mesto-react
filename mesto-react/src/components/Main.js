import React from 'react';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_edit_avatar').classList.add('popup_active');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_edit_profile').classList.add('popup_active');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_add_photo').classList.add('popup_active');
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info">
          <img className="profile__avatar" src="../images/profile__avatar.jpg" alt="аватар"/>
          <div className="profile__avatar-editor" onClick={handleEditAvatarClick}></div>
          <div className="profile__author">
            <div className="profile__title">
              <h1 className="profile__title-name">Жак-Ив Кусто</h1>
              <button className="profile__title-button" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="popup popup_edit_profile">
        <form className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>

          <input name="name" className="popup__input popup__input_filed_name" type="text" required
                 pattern="[А-ЯЁа-яёA-Za-z -]{1,}" minLength="2" maxLength="40" id="name-input"/>
          <span className="popup__input-error-message" id="name-input-error"></span>

          <input name="about" className="popup__input popup__input_filed_prof" type="text" required minLength="2"
                 maxLength="200" id="prof-input"/>
          <span className="popup__input-error-message" id="prof-input-error"></span>

          <button className="popup__save-button" type="submit">Сохранить</button>
          <button className="popup__close-icon" type="button"></button>
        </form>
      </section>

      <section className="popup popup_add_photo">
        <form className="popup__container">
          <h3 className="popup__title">Новое место</h3>

          <input name="place" className="popup__input popup__input_filed_name" type="text" placeholder="Название"
                 required minLength="1" maxLength="30" id="place-input"/>
          <span className="popup__input-error-message" id="place-input-error"></span>

          <input name="link" className="popup__input popup__input_filed_prof" type="url"
                 placeholder="Ссылка на картинку" required id="link-input"/>
          <span className="popup__input-error-message" id="link-input-error"></span>

          <button className="popup__save-button" type="submit">Создать</button>
          <button className="popup__close-icon" type="button"></button>
        </form>
      </section>

      <div className="popup popup_open_photo">
        <div className="popup-photo">
          <img className="popup-photo__image"
               src="#" alt=""/>
          <h2 className="popup-photo__text">Название места</h2>
          <button className="popup__close-icon" type="button"></button>
        </div>
      </div>

      <section className="popup popup_is_delete">
        <form className="popup__container">
          <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
          <button className="popup__save-button popup__save-button_delete" type="submit">Да</button>
          <button className="popup__close-icon" type="button"></button>
        </form>
      </section>

      <section className="popup popup_edit_avatar">
        <form className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <input name="avatar" className="popup__input popup__input_filed_avatar-link" type="url"
                 placeholder="Ссылка на аватар" required id="avatar-input"/>
          <span className="popup__input-error-message" id="avatar-input-error"></span>
          <button className="popup__save-button" type="submit">Сохранить</button>
          <button className="popup__close-icon" type="button"></button>
        </form>
      </section>

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