import React from 'react';

function PopupWithForm({title, name, children, isOpen}) {
  // let popup = isOpen && 'popup_active'

  return (
    <section className={`popup popup_${name} ${isOpen && 'popup_active'}`}>
      <form className="popup__container">
        <h3 className="popup__title">{title}</h3>

        {children}

        <button className="popup__close-icon" type="button"></button>
      </form>
    </section>
  )
}

export default PopupWithForm;