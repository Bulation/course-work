import { useEffect } from 'react';
import NewsLoader from '../NewsLoader/NewsLoader';
import styles from './newslist.module.css';
import Paginate from 'react-paginate';
import {
  MARGIN_PAGES_DISPLAYED,
  NEWS_COUNT_PER_PAGE,
  PAGE_RANGE_DISPLAYED,
} from '../../constants/constants';
import DetailedNews from '../../components/DetailedNews/DetailedNews';
import usePaginate from '../../hooks/usePaginate';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { fetchArticles, setSearchValue } from '../../redux/slices/newsSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NewsSearch from '../NewsSearch/NewsSearch';
import useSearch from '../../hooks/useSearch';

export default function NewsList() {
  const { filteredNewsData, status } = useAppSelector((state) => state.news);
  const { activeIndex, slicedData, pagesCount, handlePageClick } = usePaginate(
    filteredNewsData,
    NEWS_COUNT_PER_PAGE
  );
  const { inputValue } = useSearch();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles()).then((res) => {
      dispatch(setSearchValue(inputValue));
    });
    //in beginning it load news, after loading it filters news by input value
  }, []);
  return (
    <section className={styles.newsSection}>
      <div className={styles.newsContainer}>
        <NewsSearch />
        {status === 'loading' ? (
          [...new Array(NEWS_COUNT_PER_PAGE)].map((_, i) => <NewsLoader key={i} />)
        ) : status === 'success' ? (
          <DetailedNews news={slicedData} />
        ) : (
          <ErrorMessage />
        )}
        {filteredNewsData.length && (
          <Paginate
            pageCount={pagesCount}
            pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
            marginPagesDisplayed={MARGIN_PAGES_DISPLAYED}
            previousLabel=""
            nextLabel=""
            breakLabel="..."
            breakClassName={styles.paginationListItem}
            onPageChange={handlePageClick}
            className={styles.paginationList}
            pageClassName={styles.paginationListItem}
            activeClassName={styles.active}
            forcePage={activeIndex}
          />
        )}
      </div>
    </section>
  );
}
