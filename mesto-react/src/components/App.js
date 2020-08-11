import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

/**
 * Основной компонент, установлены слушатели на закрытие крестиком/escape/overlay
 * @returns {JSX.Element} - возврат разметки всей старницы
 * @constructor
 */

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: '', visibility: false});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(name, link, visibility) {
    setSelectedCard({name, link, visibility});
  }

  //закрытие всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard((selectedCard) => {
      return {...selectedCard, visibility: false}; // возврат значения адреса/имени картинки для плавного закрытия
    });
  }

  // закрытие попапов через escape и overlay
  useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_active')) {
        closeAllPopups();
      }
    }

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleOverlayClose);
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('click', handleOverlayClose);
      document.removeEventListener('keydown', handleEscClose);
    }
  })

  return (
    <div className="page">

      <Header/>

      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
      />

      <PopupWithForm title="Редактировать профиль"
                     name="edit_profile"
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}
      >
        <input name="name" className="popup__input popup__input_filed_name" type="text" required
               pattern="[А-ЯЁа-яёA-Za-z -]{1,}" minLength="2" maxLength="40" id="name-input" placeholder={"Имя"}/>
        <span className="popup__input-error-message" id="name-input-error"></span>

        <input name="about" className="popup__input popup__input_filed_prof" type="text" required
               minLength="2" maxLength="200" id="prof-input" placeholder={"Занятие"}/>
        <span className="popup__input-error-message" id="prof-input-error"></span>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Новое место"
                     name="add_photo"
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
      >
        <input name="place" className="popup__input popup__input_filed_name" type="text" placeholder="Название"
               required minLength="1" maxLength="30" id="place-input"/>
        <span className="popup__input-error-message" id="place-input-error"></span>

        <input name="link" className="popup__input popup__input_filed_prof" type="url"
               placeholder="Ссылка на картинку" required id="link-input"/>
        <span className="popup__input-error-message" id="link-input-error"></span>
        <button className="popup__save-button" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар"
                     name="edit_avatar"
                     isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}
      >
        <input name="avatar" className="popup__input popup__input_filed_avatar-link" type="url"
               placeholder="Ссылка на аватар" required id="avatar-input"/>
        <span className="popup__input-error-message" id="avatar-input-error"></span>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?"
                     name="is_delete"
      >
        <button className="popup__save-button popup__save-button_delete" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <Footer/>

    </div>
  );
}

export default App;
