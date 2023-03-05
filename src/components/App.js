import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../App.css';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="editProfile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="name-input" type="text" className="popup__input inputName" name="nameEdit" placeholder="Введите имя" minLength="2" maxLength="40" required />
        <div className="popup__errorContainer">
          <span className="popup__input-error name-input-error"></span>
        </div>
        <input id="about-input" type="text" className="popup__input inputAbout" name="aboutEdit" placeholder="Введите профессию" minLength="2" maxLength="200" required />
        <div className="popup__errorContainer">
          <span className="popup__input-error about-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="addPlace" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="place-input" type="text" className="popup__input inputPlace" name="name" placeholder="Название" minLength="2" maxLength="30" required />
        <div className="popup__errorContainer">
          <span className="popup__input-error place-input-error"></span>
        </div>
        <input id="link-input" type="url" className="popup__input inputLink" name="link" placeholder="Ссылка на картинку" required />
        <div className="popup__errorContainer">
          <span className="popup__input-error link-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="deleteCard" title="Вы уверены" />
      <PopupWithForm name="editAvatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="avatar-input" type="url" className="popup__input inputAvatar" name="avatar" placeholder="Ссылка на аватар" required />
        <div className="popup__errorContainer">
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
