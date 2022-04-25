import React from 'react';
import Header from './Header';
import logo from '../images/header-logo.svg';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header
        srcLogo={logo}
        altLogo={"Логотип Места России"}
      />

      <Footer text={"2022 Mesto Russia"} />
    </div>
  )

}

export default App;
