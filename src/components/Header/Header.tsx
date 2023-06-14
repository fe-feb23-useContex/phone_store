import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { MenuLink } from '../MenuLink';
import { ActionsLink } from '../ActionsLink';
import { Burger } from '../Burger';
import BurgerMenu from '../../img/icons/burger.svg';
import NiceGadgetsLogo from '../../img/nice_gadgets.png';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__nav">
          <Link className="header__logo" to={'/'}>
            <img src={NiceGadgetsLogo} alt="logo" />
          </Link>

          <MenuLink />
        </div>

        <ActionsLink />
        <Link to="#burger" className="burger__menu" onClick={handleMenuClick}>
          <img src={BurgerMenu} alt="burger_menu" />
        </Link>
      </header>
      <Burger handleClick={handleMenuClick} isActive={isMenuOpen} />
    </>
  );
};
