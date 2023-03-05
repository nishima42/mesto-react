import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
  
function Main(props) {

const [userName, setUserName] = React.useState('Жак-Ив Кусто');
const [userDescription, setUserDescription] = React.useState('Исследователь океана');
const [userAvatar, setUserAvatar] = React.useState("<%=require('./images/image.png')%>");
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getUserInfo()
  .then((userInfo) => {
    setUserName(userInfo.name);
    setUserDescription(userInfo.about);
    setUserAvatar(userInfo.avatar);
  })
  .catch((err) => {
    console.log(err);
  });
}, [])

React.useEffect(() => {
  api.getCardArray()
  .then((cardArray) => {
    setCards(cardArray);
  })
  .catch((err) => {
    console.log(err);
  });
}, [])

  return (
    <main>
      <section className="profile">
        <img className="profile__picture" src={userAvatar} alt="Аватар профиля" />
        <div className="profile__overlay" onClick={props.onEditAvatar}></div> 
        <div className="profile__info">
          <div className="profile__nameContainer">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__editButton" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__addBtn" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card, i) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;