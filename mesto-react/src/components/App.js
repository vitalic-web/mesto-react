import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from '../components/Header';
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);



  function handleEditAvatarClick() {
    // document.querySelector('.popup_edit_avatar').classList.add('popup_active');
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    // document.querySelector('.popup_edit_profile').classList.add('popup_active');
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    // document.querySelector('.popup_add_photo').classList.add('popup_active');
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">

      <Header/>

      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>

      <PopupWithForm title="Редактировать профиль"
                     name="edit_profile"
                     children={
                       <>
                         <input name="name" className="popup__input popup__input_filed_name" type="text" required
                                pattern="[А-ЯЁа-яёA-Za-z -]{1,}" minLength="2" maxLength="40" id="name-input"/>
                         <span className="popup__input-error-message" id="name-input-error"></span>

                         <input name="about" className="popup__input popup__input_filed_prof" type="text" required
                                minLength="2"
                                maxLength="200" id="prof-input"/>
                         <span className="popup__input-error-message" id="prof-input-error"></span>
                         <button className="popup__save-button" type="submit">Сохранить</button>
                       </>
                     }
                     isOpen={isEditProfilePopupOpen}
      />

      <PopupWithForm title="Новое место"
                     name="add_photo"
                     children={
                       <>
                         <input name="place" className="popup__input popup__input_filed_name" type="text" placeholder="Название"
                                required minLength="1" maxLength="30" id="place-input"/>
                         <span className="popup__input-error-message" id="place-input-error"></span>

                         <input name="link" className="popup__input popup__input_filed_prof" type="url"
                                placeholder="Ссылка на картинку" required id="link-input"/>
                         <span className="popup__input-error-message" id="link-input-error"></span>
                         <button className="popup__save-button" type="submit">Создать</button>
                       </>
                     }
                     isOpen={isAddPlacePopupOpen}
      />

      <PopupWithForm title="Обновить аватар"
                     name="edit_avatar"
                     children={
                       <>
                         <input name="avatar" className="popup__input popup__input_filed_avatar-link" type="url"
                                placeholder="Ссылка на аватар" required id="avatar-input"/>
                         <span className="popup__input-error-message" id="avatar-input-error"></span>
                         <button className="popup__save-button" type="submit">Сохранить</button>
                       </>
                     }
                     isOpen={isEditAvatarPopupOpen}
      />

      <PopupWithForm title="Вы уверены?"
                     name="is_delete"
                     children={
                       <>
                         <button className="popup__save-button popup__save-button_delete" type="submit">Да</button>
                       </>
                     }
      />

      <Footer/>

    </div>
  );
}

export default App;
