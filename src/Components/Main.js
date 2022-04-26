function Main(props) {

  return (
    <main className={"main"}>
      <section className={"profile"}>
        <div className={"profile__overlay"} >
          <img alt={props.altAvatar} className={"profile__avatar"} />
          <button className={"profile__avatar-button-edit"} type={"button"} onClick={props.onEditAvatar} aria-label={props.avatarButton}></button>
        </div>
        <div className={"profile__text-block"}>
          <div className={"profile__row-block"}>
            <h1 className={"profile__author"}>Жак-Ив Кусто</h1>
            <button className={"profile__button-edit"} type={"button"} onClick={props.onEditProfile} aria-label={props.editButton}></button>
          </div>
            <p className={"profile__status"}>Исследователь океана</p>
         </div>
         <button className={"profile__button-add"} type={"button"} onClick={props.onAddPlace} aria-label={props.addButton}></button>
      </section>

    </main>
  );
}

export default Main;