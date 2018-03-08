import React from 'react';

// Components
import Navbar from './navbar';

// Images
import images from './images';

const headerimg = images.header;

const Header = () => {
  return (
    <div className="header"
      style={{backgroundImage: "url(" + headerimg + ")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
    >
    <Navbar />
      <div className="header-text">
        <h1>King Wok</h1>
        <h1>Chinese and Mexican Cuisine</h1>
      </div>
    </div>
  )
}

export default Header;
