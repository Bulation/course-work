import { useContext, useState } from 'react';
import { sortList } from '../../data/data';
import { sortStyles } from '../../data/styles';
import useFilter from '../../hooks/useFilter';
import { setSortValue, setSortedFlats } from '../../redux/slices/filterSlice';
import Icon from '../Icon/Icon';
import SelectComponent from '../SelectComponent/SelectComponent';
import styles from './catalogsettings.module.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { Context } from '../../App';

export default function CatalogSettings() {
  const [isAsc, setIsAsc] = useState(true);
  const { isList, setIsList } = useContext(Context);
  const dispatch = useAppDispatch();
  const { sortValue } = useFilter();
  return (
    <section className={styles.settingsSection}>
      <div className={styles.settingsContainer}>
        <div className={`${styles.sortContainer} ${isAsc ? styles.asc : styles.desc}`}>
          <SelectComponent
            options={sortList}
            placeholder="По умолчанию"
            styles={sortStyles}
            value={sortValue}
            onChange={(sortChoice) => {
              dispatch(setSortValue(sortChoice?.value));
              dispatch(setSortedFlats());
              setIsAsc((value) => !value);
            }}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.listBtn} ${isList ? styles.activeBtn : ''}`}
            onClick={() => setIsList(true)}
          >
            <Icon
              id="#list"
              className={`${styles.settingsBtnSvg} ${isList ? styles.activeSvg : ''}`}
            ></Icon>
            Список
          </button>
          <button
            className={`${styles.tileBtn} ${!isList ? styles.activeBtn : ''}`}
            onClick={() => setIsList(false)}
          >
            <Icon
              id="#tile"
              className={`${styles.settingsBtnSvg} ${!isList ? styles.activeSvg : ''}`}
            ></Icon>
            Плитки
          </button>
          <button className={styles.mapBtn}>
            <Icon id="#flatsMark" className={styles.mapBtnSvg}></Icon>
            Показать на карте
          </button>
        </div>
      </div>
    </section>
  );
}
