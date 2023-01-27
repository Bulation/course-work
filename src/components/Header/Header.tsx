import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProductsList from './ProductsList';
import UserInfo from './UserInfo';
import styles from './header.module.css';
import Icon from '../Icon/Icon';
import { navigationLinks } from '../../data/data';

export default function Header() {
  const [isAuth, setIsAuth] = useState(true);
  // context for getting info about authorisation: isAuth
  // add addAd function for button onClick
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderContainer}>
          <Navigation
            links={navigationLinks}
            styles={{
              navigationItem: styles.navigationItem,
              navigationLink: styles.navigationLink,
              navigationList: styles.navigationList,
              navigationSvg: styles.navigationSvg,
              active: styles.active,
            }}
          />
          <div className={styles.buttonsContainer}>
            <Link className={styles.mark} to="/marks">
              Закладки
              <Icon id="#heart" className={styles.markSvg} />
            </Link>
            {isAuth ? (
              <UserInfo />
            ) : (
              <Link to="/login" className={styles.signButton}>
                Вход и регистрация
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomHeaderContainer}>
        <div className={styles.logo}>
          <Link to="/"></Link>
        </div>
        <ProductsList />
        <button className={styles.addAd}>+ Разместить объявление</button>
      </div>
    </header>
  );
}
