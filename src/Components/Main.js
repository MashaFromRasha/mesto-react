import React from 'react';
import api from '../utils/Api.js';

function Main(props) {
  const [userName, setUserName] = React.useState('Loading...');
  const [userDescription, setUserDescription] = React.useState('Loading...');
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);


  return (
    <main className={"main"}>
      <section className={"profile"}>
        <div className={"profile__overlay"} >
          <img src={userAvatar} alt={props.altAvatar} className={"profile__avatar"} />
          <button className={"profile__avatar-button-edit"} type={"button"} onClick={props.onEditAvatar} aria-label={props.avatarButton}></button>
        </div>
        <div className={"profile__text-block"}>
          <div className={"profile__row-block"}>
            <h1 className={"profile__author"}>{userName}</h1>
            <button className={"profile__button-edit"} type={"button"} onClick={props.onEditProfile} aria-label={props.editButton}></button>
          </div>
          <p className={"profile__status"}>{userDescription}</p>
        </div>
        <button className={"profile__button-add"} type={"button"} onClick={props.onAddPlace} aria-label={props.addButton}></button>
      </section>
    </main>
  );
}

export default Main;