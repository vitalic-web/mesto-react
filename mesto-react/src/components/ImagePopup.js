import React from 'react';

function ImagePopup() {

  return (
    <div className="popup popup_open_photo">
      <div className="popup-photo">
        <img className="popup-photo__image"
             src="#" alt=""/>
        <h2 className="popup-photo__text">Название места</h2>
        <button className="popup__close-icon" type="button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;