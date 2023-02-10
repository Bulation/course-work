import { useRef } from 'react';
import { reducer } from '../../helperFunctions/reducer';
import useClickOutside from '../../hooks/useClickOutside';
import { IFlatsData } from '../../interfaces/IFlatsData';
import Icon from '../Icon/Icon';
import styles from './flat.module.css';

interface IFlatProps {
  flat: IFlatsData;
  i: number;
  countPerPage: number;
  style?: React.CSSProperties;
}

export default function Flat({ flat, i, countPerPage, style }: IFlatProps) {
  const contactsNode = useRef<HTMLDivElement>(null);
  const initialState = Array(countPerPage).fill(false);
  const { isOpen, setIsOpen } = useClickOutside(contactsNode, initialState);
  return (
    <li className={styles.flatsItem} style={style}>
      <div className={styles.flatsItemImgContainer}>
        <img className={styles.flatsItemImg} src="/img/flat.png" alt="" />
      </div>
      <div className={styles.flatsItemBody}>
        <div className={styles.flatsItemHeader}>
          <div>
            <h3 className={styles.flatsItemPrice}>{flat.price}.00 BYN</h3>
            <p className={styles.flatsItemSubtitle}>за сутки</p>
          </div>
          <div className={styles.flatsItemRooms}>{flat.roomsCount} комн.</div>
        </div>
        <address className={styles.flatsItemAddress}>
          <p className={styles.flatsItemCityAndStreet}>
            <Icon id="#flatsMark" className={styles.flatsItemMarkSvg}></Icon>
            {flat.city}, {flat.street}
          </p>
          <span className={styles.flatsItemMetro}>
            <Icon id="#metro" className={styles.flatsItemMetroSvg}></Icon>
            {flat.metro}
          </span>
          <span className={styles.flatsItemDistrict}>
            <Icon id="#circle" className={styles.flatsItemDistrictSvg}></Icon>
            {flat.district}
          </span>
        </address>
        <p className={styles.flatsItemDescription}>
          Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры,
          описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание
          квартиры, описание ...
        </p>
        <div className={styles.line}></div>
        <div className={styles.flatsItemMore}>
          <div className={styles.mark}>
            <Icon id="#heart" className={styles.markSvg} />
          </div>
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
                      className={styles.socialsListLinkViber}
                      href={`mailto:${flat.ownerInfo.links.viber}`}
                    >
                      <Icon id="#viber" className={styles.socialsListSvg}></Icon>
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.socialsListLinkWa}
                      href={`mailto:${flat.ownerInfo.links.wa}`}
                    >
                      <Icon id="#wa" className={styles.socialsListSvg}></Icon>
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.socialsListLinkMail}
                      href={`mailto:${flat.ownerInfo.links.mail}`}
                    >
                      <Icon id="#mail" className={styles.socialsListSvg}></Icon>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.flatsItemReadMore}>Подробнее</div>
        </div>
      </div>
    </li>
  );
}
