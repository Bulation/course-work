import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { metroOptions, districtOptions } from '../../data/data';
import { selectStyles, homeMetroStyles } from '../../data/styles';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useFilter from '../../hooks/useFilter';
import { setFilteredFlats } from '../../redux/slices/filterSlice';
import { fetchFlats } from '../../redux/slices/flatSlice';
import Icon from '../Icon/Icon';
import SelectComponent from '../SelectComponent/SelectComponent';
import styles from './flatsslider.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FLATS_LIST_COUNT_PER_PAGE, SITE_URL } from '../../constants/constants';
import Flat from '../Flat/Flat';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

export default function FlatsSlider() {
  const { filter, handleSelectChange, homePageMetroValue, homePageDistrictValue } = useFilter();
  const dispatch = useAppDispatch();
  const swiper = useSwiper();
  const { filterState, filteredFlatsData } = useAppSelector((state) => state.filter);
  const { flatsData } = useAppSelector((state) => state.flats);
  const [searchParams, setSearchParams] = useSearchParams('');
  let urlValue = '';
  searchParams.forEach((value, key) => (urlValue += `${key}=${value}&`));
  useEffect(() => {
    dispatch(fetchFlats());
  }, []);
  useEffect(() => {
    dispatch(setFilteredFlats(filter(flatsData, filterState)));
  }, [flatsData]);
  return (
    <section className={styles.flatsRentSection}>
      <div className={styles.flatsRentContainer}>
        <p className={styles.gradientSubtitle}>Квартиры на сутки</p>
        <div className={styles.flatsRentHeader}>
          <h2 className={styles.homePageTitle}>
            Аренда квартир {filterState.city && `в городе ${filterState.city}`}
          </h2>
          <div className={styles.selectsContainer}>
            <SelectComponent
              options={metroOptions}
              placeholder="Метро"
              styles={homeMetroStyles}
              onChange={handleSelectChange}
              value={homePageMetroValue}
            />
            <SelectComponent
              options={districtOptions}
              placeholder="Районы"
              styles={selectStyles}
              onChange={handleSelectChange}
              value={homePageDistrictValue}
            />
          </div>
        </div>
        <div className={styles.flatsSlider}>
          <Swiper
            spaceBetween={30}
            slidesPerView={FLATS_LIST_COUNT_PER_PAGE}
            modules={[Navigation]}
            simulateTouch={false}
            navigation
          >
            {filteredFlatsData.length ? (
              filteredFlatsData.map((flat, i) => (
                <SwiperSlide key={flat.id}>
                  <Flat
                    flat={flat}
                    i={i}
                    countPerPage={FLATS_LIST_COUNT_PER_PAGE}
                    style={{ width: '100%' }}
                  />
                </SwiperSlide>
              ))
            ) : (
              <h2>Предложений по вашему запросу не найдено</h2>
            )}
          </Swiper>
        </div>
        <div className={styles.allProposals}>
          <div className={styles.proposalsDescription}>
            <p className={styles.proposalsCount}>
              {filteredFlatsData.length} <span className={styles.plus}>+</span>
            </p>
            <p className={styles.cityProposals}>
              Предложений {filterState.city && `в городе ${filterState.city}`}
            </p>
          </div>
          <Link to={`${SITE_URL}catalog?${urlValue}`} className={styles.seeMoreBtn}>
            Посмотреть все
            <Icon id="#arrowRightWhite" className={styles.moreBtnSvg} />
          </Link>
        </div>
      </div>
    </section>
  );
}
