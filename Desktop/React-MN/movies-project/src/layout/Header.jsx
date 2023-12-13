/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return (
    <nav className='blue darken-1 '>
      <div className='nav-wrapper container'>
        <a href='#' className='brand-logo'>
          React Movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
