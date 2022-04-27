function ImagePopup(props) {
  const className = `popup  ${props.card && 'popup_opened'}`;



  return (
    <section className={className} id="popup-open-image">
      <figure className="popup__figure">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
          aria-label="Закрыть просмотр фотографии">
        </button>
        <img
          className="popup__image"
          alt={`Фото ${props.card.name}`}
          src={`${props.card.link}`}
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;