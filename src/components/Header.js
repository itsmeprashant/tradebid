import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className="header">
        <div className="flex flex-center">
          <div className="title">
            <img src='https://trade-bid.ie/TradeBid-HTML/assets/images/logo-black.svg' />
          </div>
          <div className="search">
            <input type="text" placeholder='search' />
            <div className='search-icon'>
              <FontAwesomeIcon className='icon' icon={faSearch} />
            </div>
          </div>
        </div>
        <ul className="actions flex">
          <li>
            Auctions
          </li>
          <li>
            Favourites
          </li>
          <li>
            Sell
          </li>
          <li>
            Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
      
  );
}

export default Header;
