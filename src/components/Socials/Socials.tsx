import { socials } from '../../data/data';
import Icon from '../Icon/Icon';
import styles from './socials.module.css';

export default function Socials() {
  return (
    <div className={styles.socials}>
      <span>Поделиться</span>
      <ul className={styles.socialsList}>
        {socials.slice(1).map((social) => (
          <li key={social.url}>
            <a className={styles.socialsItem} href={social.url}>
              <Icon id={social.src} className={styles.socialsSvg} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
