import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { payments, socials, flatsData, ownerInfo } from '../../data/data';
import Icon from '../Icon/Icon';
import styles from './footer.module.css';
import { productsList, navigationLinks } from '../../data/data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerFirstColumn}>
          <div className={styles.logo}>
            <Link to="/"></Link>
          </div>
          <span className={styles.logoText}>СДАЁМ БАЙ</span>
          <div className={styles.ownerInfo}>
            <span className={styles.ownerInfoSpan}>{ownerInfo.name}</span>
            <span className={styles.ownerInfoSpan}>{ownerInfo.regInfo}</span>
            <span className={styles.ownerInfoSpan}>{ownerInfo.address}</span>
            <span className={styles.ownerInfoSpan}>{ownerInfo.tel}, </span>
            <span className={styles.ownerInfoSpan}>{ownerInfo.mail}</span>
            <span className={styles.ownerInfoSpan}>{ownerInfo.workTime}</span>
          </div>
        </div>
        <div className={styles.footerSecondColumn}>
          <div className={styles.listsContainer}>
            <ul className={styles.productsList}>
              {productsList.slice(1).map((product) => (
                <li className={styles.productsItem} key={product.content}>
                  <Link className={styles.productsLink} to={product.address}>
                    {product.content}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.flatsContainer}>
              <h3 className={styles.flatsTitle}>Квартиры</h3>
              <ul className={styles.flatsList}>
                {flatsData.map((flat) => (
                  <li className={styles.flatsItem} key={flat.content}>
                    <Link className={styles.flatsLink} to={flat.address}>
                      {flat.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Navigation
              links={navigationLinks.slice(1)}
              styles={{
                navigationItem: styles.navigationItem,
                navigationLink: styles.navigationLink,
                navigationList: styles.navigationList,
              }}
            />
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.socialsContainer}>
              <p>Мы в соцсетях</p>
              <div className={styles.socials}>
                <ul className={styles.socialsList}>
                  {socials.slice(0, 3).map((social) => (
                    <li className={styles.socialsItem} key={social.url}>
                      <a className={styles.socialsLink} href={social.url}>
                        <Icon id={social.src} className={styles.socialsSvg}></Icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.paymentsContainer}>
              {payments.map((payment) => (
                <div className={styles.paymentsImgContainer} key={payment.name}>
                  <img className={styles.paymentsImg} src={payment.src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
