import { useContext, useRef } from 'react';
import { Context } from '../../App';
import {
  FLATS_LIST_COUNT_PER_PAGE,
  FLATS_TILE_COUNT_PER_PAGE,
  SITE_URL,
} from '../../constants/constants';
import { reducer } from '../../helperFunctions/reducer';
import useClickOutside from '../../hooks/useClickOutside';
import { IFlatsData } from '../../interfaces/IFlatsData';
import Flat from '../Flat/Flat';
import Icon from '../Icon/Icon';
import styles from './catalogflat.module.css';

interface IFlatProps {
  flat: IFlatsData;
  i: number;
}

export default function CatalogFlat({ flat, i }: IFlatProps) {
  const contactsNode = useRef<HTMLDivElement>(null);
  const { isList } = useContext(Context);
  const flatsCountPerPage = isList ? FLATS_LIST_COUNT_PER_PAGE : FLATS_TILE_COUNT_PER_PAGE;
  const initialState = Array(flatsCountPerPage).fill(false);
  const { isOpen, setIsOpen } = useClickOutside(contactsNode, initialState);
  if (!isList) {
    return <Flat flat={flat} i={i} countPerPage={FLATS_LIST_COUNT_PER_PAGE} />;
  } else {
    return (
      <li className={styles.flatsTileItem}>
        <div className={styles.flatsTileItemImgContainer}>
          <img className={styles.flatsItemImg} src={`${SITE_URL}img/flat.png`} alt="" />
        </div>
        <div className={styles.flatsItemBody}>
          <div className={styles.flatsItemHeader}>
            <div>
              <h3 className={styles.flatsTileItemRooms}>
                {flat.roomsCount} комн. апартаменты на станции {flat.metro}
              </h3>
              <p className={styles.flatsItemCityAndStreet}>
                <Icon id="#flatsMark" className={styles.flatsTileItemMarkSvg}></Icon>
                {flat.city}, {flat.street}
              </p>
            </div>
            <div>
              <p className={styles.flatsItemPrice}>{flat.price}.00 BYN</p>
              <p className={styles.flatsItemSubtitle}>за сутки</p>
            </div>
          </div>
          <div className={styles.flatsTileItemInfo}>
            <p className={`${styles.flatsItemCityAndStreet} ${styles.chip}`}>
              {flat.roomsCount} комн.
            </p>
            <div className={`${styles.flatsTileItemMetro} ${styles.chip}`}>
              <Icon id="#metro" className={styles.flatsItemMetroSvg}></Icon>
              {flat.metro}
            </div>
            <div className={`${styles.flatsItemDistrict} ${styles.chip}`}>
              <span className={styles.districtColored}>район: </span>
              {flat.district}
            </div>
          </div>
          <p className={styles.flatsItemDescription}>
            Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры,
            описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание
            квартиры, описание ...
          </p>
          <div className={styles.flatsItemMore}>
            <div
              ref={contactsNode}
              className={styles.flatsItemContacts}
              onClick={() => setIsOpen(reducer(isOpen, i))}
            >
              <Icon id="#phone" className={styles.phoneSvg} />
              Контакты
              {isOpen[i] && (
                <div className={styles.contactsInfo}>
                  <p className={styles.owner}>Владелец</p>
                  <p className={styles.ownerInfo}>{flat.ownerInfo.name}</p>
                  <a href={`tel:${flat.ownerInfo.phone}`} className={styles.ownerInfo}>
                    {flat.ownerInfo.phone}
                  </a>
                  <a className={styles.ownerLink} href={`mailto:${flat.ownerInfo.links.mail}`}>
                    {flat.ownerInfo.links.mail}
                  </a>
                  <ul className={styles.socialsList}>
                    <li>
                      <a
                        className={`${styles.socialsListLink} ${styles.socialsListLinkViber}`}
                        href={`mailto:${flat.ownerInfo.links.viber}`}
                      >
                        <Icon id="#viber" className={styles.socialsListSvg}></Icon>
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${styles.socialsListLink} ${styles.socialsListLinkWa}`}
                        href={`mailto:${flat.ownerInfo.links.wa}`}
                      >
                        <Icon id="#wa" className={styles.socialsListSvg}></Icon>
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${styles.socialsListLink} ${styles.socialsListLinkMail}`}
                        href={`mailto:${flat.ownerInfo.links.mail}`}
                      >
                        <Icon id="#mail" className={styles.socialsListSvg}></Icon>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.tileMark}>
              В закладки
              <Icon id="#heart" className={styles.markSvg} />
            </div>
            <div className={styles.flatsItemReadMore}>Подробнее</div>
          </div>
        </div>
      </li>
    );
  }
}
