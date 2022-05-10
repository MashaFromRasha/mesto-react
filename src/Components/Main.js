import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from "../Contexts/CurrentUserContext";


function Main({
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardClick
}) {


  const [cards, setCards] = useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) =>  {
        const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((elem) => elem !== card);
        setCards(newCards);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__overlay">
          <img src={currentUser.avatar} alt={`Аватар пользователя ${currentUser.name}`} className="profile__avatar" />
          <button className="profile__avatar-button-edit" type="button" onClick={onEditAvatar} aria-label="Заменить аватар профиля"></button>
        </div>
        <div className="profile__text-block">
          <div className="profile__row-block">
            <h1 className="profile__author">{currentUser.name}</h1>
            <button className="profile__button-edit" type="button" onClick={onEditProfile} aria-label="Изменить описание профиля"></button>
          </div>
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={onAddPlace} aria-label="Добавить новое фото"></button>
      </section>


      <section className="photos">
        {
          cards.map(item => 
          <Card 
          key={item._id} 
          card={item} 
          onCardClick={onCardClick} 
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          />)
        }
      </section>
    </main>
  );

}

export default Main;