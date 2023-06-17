import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import styles from './notfoundpage.module.css';
import { SITE_URL } from '../../constants/constants';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.notFoundContainer}>
            <div className={styles.notFound}>
              <div className={styles.notFoundDescription}>
                <h2 className={styles.notFoundTitle}>Ошибка 404</h2>
                <p className={styles.notFoundText}>
                  Возможно, у вас опечатка в адресе страницы, или её просто не существует
                </p>
                <Link className={styles.notFoundButton} to={`${SITE_URL}`}>
                  <Icon id="#homeRun" className={styles.notFoundSvg}></Icon>
                  Вернуться на главную
                </Link>
              </div>
              <span className={styles.notFoundError}>404</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
