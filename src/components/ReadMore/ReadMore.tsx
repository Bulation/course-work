import { useAppSelector } from '../../hooks/reduxHooks';
import DetailedNews from '../DetailedNews/DetailedNews';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NewsLoader from '../NewsLoader/NewsLoader';
import styles from './readmore.module.css';

export default function ReadMore() {
  const { allNewsData, status } = useAppSelector((state) => state.news);
  return (
    <section className={styles.readMoreSection}>
      <div className={styles.readMoreContainer}>
        <h3 className={styles.readMoreTitle}>Читайте также</h3>
        <div className={styles.newsContainer}>
          {status === 'loading' ? (
            [...new Array(3)].map((_, i) => <NewsLoader key={i} />)
          ) : status === 'success' ? (
            <DetailedNews news={allNewsData.slice(0, 3)} />
          ) : (
            <ErrorMessage />
          )}
        </div>
      </div>
    </section>
  );
}
