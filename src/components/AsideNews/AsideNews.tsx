import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { fetchArticles } from '../../redux/slices/newsSlice';
import Icon from '../Icon/Icon';
import styles from './asidenews.module.css';
import { SITE_URL } from '../../constants/constants';

export default function AsideNews() {
  const { allNewsData } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div className={styles.news}>
      <h2 className={styles.allNewsTitle}>Новости</h2>
      {allNewsData.slice(0, 5).map((news) => (
        <React.Fragment key={news.id}>
          <Link
            key={news.id}
            to={`${SITE_URL}news/${news.id}`}
            className={styles.detailedNews}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h3 className={styles.newsTitle}>{news.title}</h3>
            <time className={styles.newsDate}>
              {new Date(news.publishedAt).toLocaleDateString('ru-RU', {
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </Link>
          <div className={styles.line}></div>
        </React.Fragment>
      ))}
      <Link
        className={styles.newsLink}
        to={`${SITE_URL}news`}
        onClick={() => window.scrollTo(0, 0)}
      >
        Посмотреть все
        <Icon id="#arrowRightBlue" className={styles.newsSvg}></Icon>
      </Link>
    </div>
  );
}
