import { Article } from '../../types/Article';
import styles from './detailednews.module.css';
import NewsCard from '../NewsCard/NewsCard';

interface IDetailedNews {
  news: Article[];
}

export default function DetailedNews({ news }: IDetailedNews) {
  if (!news.length) {
    return <h3 className={styles.errorTitle}>Новостей по вашему запросу не найдено</h3>;
  }
  return (
    <div className={styles.news}>
      {news.map((detailedNews) => (
        <NewsCard key={detailedNews.id} detailedNews={detailedNews} />
      ))}
    </div>
  );
}
