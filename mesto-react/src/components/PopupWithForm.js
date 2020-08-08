import React, {useEffect} from 'react';

function PopupWithForm({title, name, children, isOpen, onClose}) {

  useEffect(() => {
    console.log('useEffect');

    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_active')) {
        onClose();
      }
    }

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    if(isOpen) {
      console.log('addListener');
      document.addEventListener('click', handleOverlayClose);
      document.addEventListener('keydown', handleEscClose);
    }


    return () => {
      console.log('removeEffect');
      document.removeEventListener('click', handleOverlayClose);
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isOpen])

  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>

      <form className="popup__container">
        <h3 className="popup__title">{title}</h3>

        {children}

        <button className="popup__close-icon" type="button" onClick={onClose}>
        </button>
      </form>
    </section>
  )
}

export default PopupWithForm;