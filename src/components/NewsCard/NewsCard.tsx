import { Link } from 'react-router-dom';
import styles from './newscard.module.css';
import { Article } from '../../types/Article';
import { SITE_URL } from '../../constants/constants';

interface INewsCardProps {
  detailedNews: Article;
}

export default function NewsCard({ detailedNews }: INewsCardProps) {
  return (
    <Link
      to={`${SITE_URL}news/${detailedNews.id}`}
      className={styles.detailedNews}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img className={styles.newsImg} src={detailedNews.urlToImage} alt="" />
      <h3 className={styles.newsTitle}>{detailedNews.title}</h3>
      <p className={styles.newsDescription}>{detailedNews.description}</p>
      <div className={styles.newsLine}></div>
      <div className={styles.newsBottom}>
        <time className={styles.newsDate}>
          {new Date(detailedNews.publishedAt).toLocaleDateString()}
        </time>
        <button className={styles.newsBtn}>Читать</button>
      </div>
    </Link>
  );
}
