import commonStyles from '../../commonstyles.module.css';
import styles from './contacts.module.css';
import { ownerInfo, socials } from '../../data/data';
import Icon from '../../components/Icon/Icon';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactsForm from '../../components/ContactsForm/ContactsForm';

export default function Contacts() {
  return (
    <>
      <Header />
      <section className={commonStyles.section}>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsDescription}>
            <h2 className={styles.contactsTitle}>Контакты</h2>
            <p className={styles.contactsText}>
              Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы
              всегда рады услышать Ваше мнение.
            </p>
            <address>
              <div className={styles.ownerInfo}>
                <div className={styles.addressSvgContainer}>
                  <Icon id="#addressMark" className={styles.addressSvg}></Icon>
                </div>
                <p>{ownerInfo.address}</p>
              </div>
              <div className={styles.ownerInfo}>
                <div className={styles.addressSvgContainer}>
                  <Icon id="#phone" className={styles.addressSvg}></Icon>
                </div>
                <a className={styles.ownerInfoLink} href={`tel:${ownerInfo.tel}`}>
                  {ownerInfo.tel}
                </a>
                <ul className={styles.addressSocialsList}>
                  {socials.slice(3).map((social) => (
                    <li className={styles.addressSocialsItem} key={social.url}>
                      <a className={styles.addressSvgContainer} href={social.url}>
                        <Icon id={social.src} className={styles.socialsSvg}></Icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.ownerInfo}>
                <div className={styles.addressSvgContainer}>
                  <Icon id="#mail" className={styles.addressSvg}></Icon>
                </div>
                <a className={styles.ownerInfoLink} href={`mailto:${ownerInfo.mail}`}>
                  {ownerInfo.mail}
                </a>
              </div>
              <div className={styles.ownerInfo}>
                <div className={styles.addressSvgContainer}>
                  <Icon id="#clock" className={styles.addressSvg}></Icon>
                </div>
                <p>{ownerInfo.workTime}</p>
              </div>
            </address>
            <div className={styles.regInfo}>
              <span>{ownerInfo.name}</span>
              <span>{ownerInfo.regInfo}</span>
            </div>
            <div className={styles.warning}>
              <Icon id="#warning" className={styles.warningSvg}></Icon>
              <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
            </div>
          </div>
          <ContactsForm />
          <div className={styles.contactsSocials}>
            <ul className={styles.socialsList}>
              {socials.slice(0, 3).map((social) => (
                <li key={social.url}>
                  <a className={styles.socialsItem} href={social.url}>
                    <Icon id={social.src} className={styles.socialsSvg}></Icon>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
