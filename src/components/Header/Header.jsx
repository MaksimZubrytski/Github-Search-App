import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => (
  <header className='header'>
    <div className='wrapper header__wrapper'>
      <Logo />
      <Search />
    </div>
  </header>
);

export default Header;
