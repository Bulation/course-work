import { useEffect } from 'react';
import { fastFilterData } from '../../data/data';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useFilter from '../../hooks/useFilter';
import { setFilteredFlats } from '../../redux/slices/filterSlice';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Icon from '../Icon/Icon';
import styles from './fastfilter.module.css';

const breadcrumbsList = [
  {
    current: true,
    content: 'Квартиры',
  },
];

export default function FastFilter() {
  const { filterState } = useAppSelector((state) => state.filter);
  const { flatsData } = useAppSelector((state) => state.flats);
  const dispatch = useAppDispatch();
  const { filter, handleFastFilterChange, activeFastFilter } = useFilter();
  useEffect(() => {
    dispatch(setFilteredFlats(filter(flatsData, filterState)));
  }, [activeFastFilter]);
  return (
    <>
      <Breadcrumbs breadcrumbsList={breadcrumbsList} />
      <div className={styles.filtersContainer}>
        <h2 className={styles.pageTitle}>
          Аренда квартир на сутки {filterState.city && `в городе ${filterState.city}`}
        </h2>
        <p className={styles.recommendationText}>Рекомендуем посмотреть</p>
        {activeFastFilter &&
        filterState[activeFastFilter.key as keyof typeof filterState] === activeFastFilter.value ? (
          <div
            className={styles.fastFiltersItem}
            onClick={() => handleFastFilterChange({ key: activeFastFilter.key, value: '' })}
          >
            {activeFastFilter.label}
            <Icon id="#close" className={styles.fastFiltersSvg} />
          </div>
        ) : (
          <ul className={styles.fastFiltersList}>
            {fastFilterData.map((filter) => (
              <li
                key={filter.id}
                className={styles.fastFiltersItem}
                onClick={() =>
                  handleFastFilterChange({ key: filter.key, value: filter.value }, filter)
                }
              >
                {filter.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
