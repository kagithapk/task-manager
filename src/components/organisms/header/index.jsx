import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import useTheme from '../../../hooks/useTheme';
import TextP from '../../atoms/textP';
import Button from '../../atoms/button';

const Header = () => {
  const theme = useTheme();
  const menuBar = useRef();
  const headerNav = useRef();

  const onMenuClick = () => {
    menuBar.current.classList.toggle('header-change');
    headerNav.current.classList.toggle('header-nav-container__view');
  };

  return (
    <>
      <header className={`header-container header-${theme}`}>
        <section className="header-logo-container">
          <TextP context="Kagitha's Task App" className="header-logo" />
        </section>
        <section className="header-bar-container">
          <section
            ref={menuBar}
            role="button"
            tabIndex={0}
            className="header-menu"
            onKeyDown={() => onMenuClick()}
            onClick={() => onMenuClick()}
          >
            <div className="header-menu-bar1" />
            <div className="header-menu-bar2" />
            <div className="header-menu-bar3" />
          </section>
          <section ref={headerNav} className="header-nav-container">
            <nav className="header-navigation">
              <ul className="header-un-list">
                <li className={`header-list header-list-${theme}`}>
                  <NavLink className={`header-link header-link-${theme}`} to="/home">Home</NavLink>
                </li>
                <li className={`header-list header-list-${theme}`}>
                  <NavLink className={`header-link header-link-${theme}`} to="/account">Account</NavLink>
                </li>
              </ul>
            </nav>
            <section className="header-logout-container">
              <Button
                label="Log out"
                type="button"
                className="button-danger"
                handleClick={() => {}}
              />
            </section>
          </section>
        </section>
      </header>
    </>
  );
};

export default Header;
