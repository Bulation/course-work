import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProductsList from './ProductsList';
import UserInfo from './UserInfo';
import styles from './header.module.css';
import Icon from '../Icon/Icon';
import { navigationLinks } from '../../data/data';
import { SITE_URL } from '../../constants/constants';

export default function Header() {
  const isLogout = localStorage.getItem('isLogout') === 'true';
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
            <Link className={styles.mark} to={`${SITE_URL}marks`}>
              Закладки
              <Icon id="#heart" className={styles.markSvg} />
            </Link>
            {isLogout ? (
              <Link to={`${SITE_URL}auth`} className={styles.signButton}>
                Вход и регистрация
              </Link>
            ) : (
              <UserInfo />
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomHeaderWrapper}>
        <div className={styles.bottomHeaderContainer}>
          <Link to={`${SITE_URL}`} className={styles.logo}></Link>
          <ProductsList />
          <button className={styles.addAd}>+ Разместить объявление</button>
        </div>
      </div>
    </header>
  );
}
