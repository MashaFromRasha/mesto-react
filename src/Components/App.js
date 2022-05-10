import React, {useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: "Loading..."
  });

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);

    setSelectedCard(null);

  }

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleCardClick = (data) => setSelectedCard(data);

  useEffect(() => {
    api
      .getUserInfo()
      .then(
        ({ name, about, avatar, _id }) => {
          setCurrentUser({ name, about, avatar, _id });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then(
        ({ name, about, avatar}) => {
          setCurrentUser({ name, about, avatar});
          closeAllPopups();
      })
      .catch((err) => console.log(`Error: ${err}`));
  }


  return (
    <div>
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />


      {/* Popup редактирования профиля */}
      <EditProfilePopup

        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />


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
    </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
