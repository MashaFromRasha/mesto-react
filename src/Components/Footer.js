function Footer(props) {
  return (
    <footer className={"footer"}>
      <p className={"footer__copy"}>&copy; {props.text}</p>
    </footer>
  );
}

export default Footer;