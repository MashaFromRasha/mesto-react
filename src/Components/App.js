import React from 'react';
import Header from './Header';
import logo from '../images/header-logo.svg';

function App() {
  return (
    <div>
      <Header
        srcLogo={logo}
        altLogo={"Логотип Маста России"}
      />
    </div>
  )

}

export default App;
