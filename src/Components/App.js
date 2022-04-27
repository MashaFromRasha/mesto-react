import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState('');

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);

    setSelectedCard('')
  }

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) };
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) };
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) };

  const handleCardClick = (data) => { setSelectedCard(data) };


  return (
    <div>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />


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


      {/* Popup добавления новой карточки */}
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


      {/* Popup обновления аватара */}
      <PopupWithForm
        name={"popup-add-avatar"}
        title={"Обновить аватар"}
        textButton={"Обновить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_photo" type="url" placeholder="Ссылка на аватар"
          name="popup-input-url-avatar" required />
        <span id="popup-input-url-avatar-error" className="popup__error"></span>
      </PopupWithForm>


      {/* Popup подтверждения удаления карточки */}
      <PopupWithForm
        name={"popup-remove-card"}
        title={"Вы уверены?"}
        textButton={"Да"}
      />

      {/* Popup просмотра фото */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App;
