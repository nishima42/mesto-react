import React from 'react';
  
function ImagePopup(props) {

  return (
    <div className={`popup card-popup ${props.card.link && 'popup_opened'}`}>
      <div className="card-popup__container">
        <h2 className="card-popup__title">{props.card.name}</h2>
        <img className="card-popup__image" src={props.card.link} />
        <button className="popup__closeBtn" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;