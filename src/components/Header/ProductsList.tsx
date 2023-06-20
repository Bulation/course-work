import { Link } from 'react-router-dom';
import { useRef } from 'react';
import styles from './header.module.css';
import Icon from '../Icon/Icon';
import { productsList, dropDownList } from '../../data/data';
import useClickOutside from '../../hooks/useClickOutside';
import { reducer } from '../../helperFunctions/reducer';

export default function ProductsList() {
  const initialState = Array(dropDownList.length).fill(false);
  const dropdownListNode = useRef<HTMLUListElement>(null);
  const { isOpen, setIsOpen } = useClickOutside<boolean[]>(dropdownListNode, initialState);
  return (
    <ul ref={dropdownListNode} className={styles.productsList}>
      {productsList.map((link, i) => {
        return (
          <li
            key={link.content}
            className={styles.productsItem}
            onClick={() => setIsOpen(reducer(isOpen, i))}
          >
            <button className={styles.productsButton}>{link.content}</button>
            {link.svgId ? <Icon id={link.svgId} className={styles.productsSvg}></Icon> : null}
            {isOpen[i] && (
              <ul className={styles.dropDownList}>
                {dropDownList[i].map((item) => (
                  <li className={styles.dropDownItem} key={item.content}>
                    <Link className={styles.dropDownLink} to={item.address}>
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
