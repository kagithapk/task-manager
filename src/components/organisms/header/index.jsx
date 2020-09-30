import React, { useRef, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './header.scss';
import useChangeTheme from '../../../hooks/useChangeTheme';
import useTheme from '../../../hooks/useTheme';
import TextP from '../../atoms/textP';
import Button from '../../atoms/button';
import TASK_API from '../../../api/taskApi';
import END_POINTS from '../../../endPoints/routes';
import Loader from '../../atoms/loader';
import MANAGE_COOKIES from '../../../helpers/cookiesHelper';
import NAVBAR_ITEMS from '../../../constants/navbarItems';

const Header = () => {
  const theme = useTheme();
  const menuBar = useRef();
  const headerNav = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false);

  const onMenuClick = () => {
    menuBar.current.classList.toggle('header-change');
    headerNav.current.classList.toggle('header-nav-container__view');
  };

  const logout = () => {
    setIsLoading(true);
    TASK_API.post(END_POINTS.usersLogout)
      .then(async (response) => {
        if (response.status === 200) {
          setIsLoading(false);
          MANAGE_COOKIES.remove('token');
          MANAGE_COOKIES.remove('user');
          setIsSuccessfulLogout(true);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
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
                <li className={`header-list header-list=${theme}`}>
                  <Button
                    type="button"
                    label="Change Theme"
                    className="button-primary"
                    handleClick={useChangeTheme()}
                  />
                </li>
                {NAVBAR_ITEMS.map((navItem) => (
                  <li key={navItem.route} className={`header-list header-list-${theme}`}>
                    <NavLink className={`header-link header-link-${theme}`} to={navItem.route}>{navItem.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <section className="header-logout-container">
              <Button
                label="Log out"
                type="button"
                className="button-danger"
                handleClick={logout}
              />
            </section>
          </section>
        </section>
      </header>
      {isLoading && <Loader />}
      {isSuccessfulLogout && <Redirect to="/login" />}
    </>
  );
};

export default Header;
