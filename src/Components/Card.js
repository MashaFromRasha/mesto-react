function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        alt={`Фото ${props.card.name}`}
        src={props.card.link}
        onClick={handleCardClick}
      />
      <button className="card__button-remove" type="button" aria-label="Удалить карточку" />
      <div className="card__row-block">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__button-like" type="button" aria-label="Поставить лайк" />
          <span className="card__score-like">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;