import React from 'react';
  
function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element" onClick={handleClick}>
      <img className="element__image" src={props.card.link}/>
      <button type="button" className="element__deleteButton"></button>
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__likeContainer">
          <button type="button" className="element__likeButton"></button>
          <p className="element__likeQuantity"></p>
        </div>
      </div>
    </article>
  );
}

export default Card;