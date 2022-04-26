import React from 'react';
import Header from './Header';
import logo from '../images/header-logo.svg';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }


  return (
    <div>
      <Header
        srcLogo={logo}
        altLogo="Логотип Места России"
      />

      <Main
        altAvatar="Изображение автора"
        avatarButton="Заменить аватар профиля"
        editButton="Изменить описание профиля"
        onEditProfile={handleEditProfileClick}
        addButton="Добавить новое фото"
        onAddPlace={handleAddPlaceClick}
      />

      <Footer text="2022 Mesto Russia" />

      {/* Popup редактирования профиля */}
      <PopupWithForm
        name="popup-profile"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >

        <input className="popup__input popup__input_type_author" type="text" placeholder="Ваше имя"
          name="popup-input-name" minLength="2" maxLength="40" required />
        <span id="popup-input-name-error" className="popup__error"></span>
        <input className="popup__input popup__input_type_status" type="text" placeholder="Расскажите о себе"
          name="popup-input-status" minLength="2" maxLength="200" required />
        <span id="popup-input-status-error" className="popup__error"></span>
      </PopupWithForm>


      <PopupWithForm
        name="popup-add-card"
        title="Новое место"
        textButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_place-name" type="text" placeholder="Название"
          name="popup-input-place-name" minLength="2" maxLength="30" required />
        <span id="popup-input-place-name-error" className="popup__error"></span>
        <input className="popup__input popup__input_type_photo" type="url" placeholder="Ссылка на фото"
          name="popup-input-url" required />
        <span id="popup-input-url-error" className="popup__error"></span>
      </PopupWithForm>
    </div>
  )

}

export default App;
