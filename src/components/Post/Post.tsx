import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { fetchArticles } from '../../redux/slices/newsSlice';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PostLoader from '../PostLoader/PostLoader';
import Socials from '../Socials/Socials';
import styles from './post.module.css';

export default function Post() {
  const { id } = useParams();
  const { allNewsData, status } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  const post = useMemo(() => allNewsData[Number(id)], [allNewsData, id]);
  const breadcrumbsList = useMemo(
    () => [
      {
        current: false,
        content: 'Новости',
        address: '/news',
      },
      {
        current: true,
        content: post?.title,
      },
    ],
    [post?.title]
  );
  return (
    <section className={styles.postSection}>
      <div className={styles.postContainer}>
        <Breadcrumbs breadcrumbsList={breadcrumbsList} />
        {status === 'loading' ? (
          <PostLoader />
        ) : status === 'error' ? (
          <ErrorMessage />
        ) : (
          <>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <div className={styles.shareContainer}>
              <time className={styles.postDate}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              <Socials />
            </div>
            <div className={styles.postImgContainer}>
              <img className={styles.postImg} src={post.urlToImage} alt="" />
            </div>
            <p className={styles.postContent}>{post.description}</p>
            <p className={styles.postContent}>{post.description}</p>
            <p className={styles.postContent}>{post.description}</p>
            <p className={styles.postContent}>{post.description}</p>
            <p className={styles.postContent}>{post.description}</p>
          </>
        )}
      </div>
    </section>
  );
}
