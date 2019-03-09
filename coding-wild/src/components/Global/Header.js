import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = _ => {
  return (
    <header className="full-width-container">
      <div className="wrapper">
        <h1 className="logo">CODING WILD</h1>
        <div className="navigation">
          <NavLink to="./test">Quests</NavLink>
          <NavLink to="./test">About</NavLink>
          <NavLink to="./test">Contact Us</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header;