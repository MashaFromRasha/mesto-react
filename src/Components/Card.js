function Card(props) {
  return (
    <article className="card">
      <img
        className="card__image"
        alt={props.title}
        src={props.src}
        onClick={props.handleClick}
      />
      <button className="card__button-remove" type="button" aria-label="Удалить карточку" />
      <div className="card__row-block">
        <h2 className="card__title">{props.title}</h2>
        <div className="card__like-container">
          <button className="card__button-like" type="button" aria-label="Поставить лайк" />
          <span className="card__score-like">{props.likes}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;