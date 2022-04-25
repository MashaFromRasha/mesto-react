function PopupWithForm(props) {

    return (
      <section className={"popup popup_opened"}>
        <div className={"popup__container"}>
          <button
            className={"popup__button-close"}
            type={"button"}
            onClick={props.onClose}>
          </button>
          <h2 className={"popup__title"}>
            {props.title}</h2>
          <form
            className={"popup__form"}
            name={props.name}
            id={"popup-form-edit"}>
            {props.children}
            <button
              className={"popup__button-submit"}
              type={"submit"}>
              {props.textButton}
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default PopupWithForm;