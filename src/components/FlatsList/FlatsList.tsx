import { useContext, useEffect } from 'react';
import {
  MARGIN_PAGES_DISPLAYED,
  PAGE_RANGE_DISPLAYED,
  FLATS_LIST_COUNT_PER_PAGE,
  FLATS_TILE_COUNT_PER_PAGE,
} from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useFilter from '../../hooks/useFilter';
import usePaginate from '../../hooks/usePaginate';
import { fetchFlats } from '../../redux/slices/flatSlice';
import Paginate from 'react-paginate';
import styles from './flatslist.module.css';
import { setFilteredFlats } from '../../redux/slices/filterSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NewsLoader from '../NewsLoader/NewsLoader';
import { IFlatsData } from '../../interfaces/IFlatsData';
import { useSearchParams } from 'react-router-dom';
import { IFilterState } from '../../interfaces/IFilterState';
import Socials from '../Socials/Socials';
import Flat from '../CatalogFlat/CatalogFlat';
import { Context } from '../../App';
import CatalogFlat from '../CatalogFlat/CatalogFlat';
export default function FlatsList() {
  const dispatch = useAppDispatch();
  const { filteredFlatsData } = useAppSelector((state) => state.filter);
  const { status } = useAppSelector((state) => state.flats);
  const { isList } = useContext(Context);
  const flatsCountPerPage = isList ? FLATS_LIST_COUNT_PER_PAGE : FLATS_TILE_COUNT_PER_PAGE;
  const { activeIndex, slicedData, pagesCount, handlePageClick } = usePaginate(
    filteredFlatsData,
    flatsCountPerPage
  );
  const { filter } = useFilter();
  const [searchParams] = useSearchParams('');
  useEffect(() => {
    const params = {} as IFilterState;
    Array.from(searchParams.keys()).forEach((key) => {
      const value = searchParams.get(key);
      if (!value) {
        params[key as keyof typeof params] = '';
      } else {
        params[key as keyof typeof params] = value;
      }
    });
    dispatch(fetchFlats()).then((res) => {
      dispatch(setFilteredFlats(filter(res.payload as IFlatsData[], params)));
    });
  }, []);
  return (
    <>
      <section className={styles.flatsListSection}>
        <div className={styles.flatsListContainer}>
          <h2 className={styles.flatsListTitle}>Найдено {filteredFlatsData.length} результата</h2>
          {status === 'loading' ? (
            [...new Array(flatsCountPerPage)].map((_, i) => <NewsLoader key={i} />)
          ) : status === 'success' ? (
            <ul className={styles.flatsList}>
              {slicedData.map((flat, i) => (
                <CatalogFlat key={flat.id} flat={flat} i={i} />
              ))}
            </ul>
          ) : (
            <ErrorMessage />
          )}
        </div>
      </section>
      <section className={styles.paginationSection}>
        <div className={styles.paginationContainer}>
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
          <Socials />
        </div>
      </section>
    </>
  );
}
