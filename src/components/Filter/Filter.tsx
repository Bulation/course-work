import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import { cityOptions, districtOptions, metroOptions, roomsOptions } from '../../data/data';
import { selectStyles } from '../../data/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useFilter from '../../hooks/useFilter';
import { resetFilter, setFilteredFlats, setFilterValue } from '../../redux/slices/filterSlice';
import Icon from '../Icon/Icon';
import SelectComponent from '../SelectComponent/SelectComponent';
import styles from './filter.module.css';
import { SITE_URL } from '../../constants/constants';

export default function Filter() {
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { filterState } = useAppSelector((state) => state.filter);
  const { flatsData } = useAppSelector((state) => state.flats);
  const location = useLocation();
  const isHome = location.pathname === `${SITE_URL}` ? true : false;
  const [searchParams, setSearchParams] = useSearchParams('');
  const {
    filter,
    handleInputChange,
    handleSelectChange,
    cityValue,
    roomValue,
    metroValue,
    districtValue,
  } = useFilter();
  let urlValue = '';
  searchParams.forEach((value, key) => (urlValue += `${key}=${value}&`));
  useEffect(() => {
    Object.keys(filterState).forEach((key) => {
      const value = searchParams.get(key);
      if (!value) {
        dispatch(setFilterValue({ [key]: '' }));
      } else {
        dispatch(setFilterValue({ [key]: value }));
      }
    });
    dispatch(setFilteredFlats(filter(flatsData, filterState)));
  }, [searchParams]);
  return (
    <div className={styles.filterContentContainer}>
      <div className={`${isHome ? styles.filterContent : styles.filterCatalogContent}`}>
        {isHome && (
          <div className={styles.filterItem}>
            <h3 className={styles.filterTitle}>Город</h3>
            <SelectComponent
              options={cityOptions}
              placeholder="Выберите"
              styles={selectStyles}
              value={cityValue}
              onChange={handleSelectChange}
            />
          </div>
        )}
        <div className={`${isHome ? styles.filterItem : styles.filterCatalogItem}`}>
          <h3 className={`${isHome ? styles.filterTitle : styles.filterCatalogTitle}`}>Комнаты</h3>
          <SelectComponent
            options={roomsOptions}
            placeholder="Выберите"
            styles={selectStyles}
            value={roomValue}
            onChange={handleSelectChange}
          />
        </div>
        <div className={`${isHome ? styles.filterItem : styles.filterCatalogItem}`}>
          <h3 className={`${isHome ? styles.filterTitle : styles.filterCatalogTitle}`}>
            Цена за сутки (BYN)
          </h3>
          <div className={styles.priceInputContainer}>
            <input
              className={styles.input}
              type="number"
              placeholder="От"
              value={filterState.minPrice}
              name="minPrice"
              onChange={handleInputChange}
            />
            <span className={styles.inputHyphen}>-</span>
            <input
              className={styles.input}
              type="number"
              placeholder="До"
              value={filterState.maxPrice}
              name="maxPrice"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div
          className={`${isHome ? styles.filterItem : styles.filterCatalogItem}`}
          onClick={() => setIsMoreOptionsOpen((value) => !value)}
        >
          <div className={styles.filterItemWrapper}>
            Больше опций
            <Icon id="#settings" className={styles.settingsSvg} />
          </div>
        </div>
        {isHome ? (
          <>
            <div className={styles.filterItem}>
              <div className={styles.filterItemWrapper}>
                На карте
                <Icon id="#flatsMark" className={styles.mapSvg} />
              </div>
            </div>
            <Link to={`${SITE_URL}catalog?${urlValue}`} className={styles.filterBtn}>
              Показать
              <Icon id="#arrowRightBlack" className={styles.btnSvg}></Icon>
            </Link>
          </>
        ) : (
          <>
            <button
              className={styles.filterBtnClear}
              onClick={() => {
                dispatch(resetFilter());
                dispatch(setFilteredFlats(flatsData));
                setSearchParams(new URLSearchParams(''));
              }}
            >
              Очистить
            </button>
            <button
              className={styles.filterBtnShow}
              onClick={() => dispatch(setFilteredFlats(filter(flatsData, filterState)))}
            >
              Показать объекты
              <Icon id="#arrowRightWhite" className={styles.btnSvg}></Icon>
            </button>
          </>
        )}
      </div>
      {isMoreOptionsOpen && (
        <div className={styles.moreOptionsContainer}>
          <div className={styles.filterItem}>
            <h3 className={styles.filterTitle}>Район</h3>
            <SelectComponent
              options={districtOptions}
              placeholder="Выберите"
              styles={selectStyles}
              onChange={handleSelectChange}
              value={districtValue}
            />
          </div>
          <div className={styles.filterItem}>
            <h3 className={styles.filterTitle}>Метро</h3>
            <SelectComponent
              options={metroOptions}
              placeholder="Выберите"
              styles={selectStyles}
              onChange={handleSelectChange}
              value={metroValue}
            />
          </div>
        </div>
      )}
    </div>
  );
}
