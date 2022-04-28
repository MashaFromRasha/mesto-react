import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {

  const [userName, setUserName] = useState('Loading...');
  const [userDescription, setUserDescription] = useState('Loading...');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(`Error: ${err}`));

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__overlay">
          <img src={userAvatar} alt="Изображение автора" className="profile__avatar" />
          <button className="profile__avatar-button-edit" type="button" onClick={props.onEditAvatar} aria-label="Заменить аватар профиля"></button>
        </div>
        <div className="profile__text-block">
          <div className="profile__row-block">
            <h1 className="profile__author">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile} aria-label="Изменить описание профиля"></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace} aria-label="Добавить новое фото"></button>
      </section>


      <section className="photos">
        {
          cards.map(item => 
          <Card 
          key={item._id} 
          card={item} 
          onCardClick={props.onCardClick} 
          />)
        }
      </section>
    </main>
  );

}

export default Main;