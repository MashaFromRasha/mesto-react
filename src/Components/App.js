import React from 'react';
import Header from './Header';
import logo from '../images/header-logo.svg';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header
        srcLogo={logo}
        altLogo={"Логотип Места России"}
      />

      <Main
        altAvatar={"Изображение автора"}
        avatarButton={"Заменить аватар профиля"}
        editButton={"Изменить описание профиля"}
        addButton={"Добавить новое фото"}
      />

      <Footer text={"2022 Mesto Russia"} />
    </div>
  )

}

export default App;
