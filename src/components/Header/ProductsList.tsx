import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import styles from './header.module.css';
import Icon from '../Icon/Icon';
import { productsList, dropDownList } from '../../data/data';

const reducer = (state: boolean[], index: number) => {
  return state.map((value, i) => {
    if (index === i) {
      return true;
    }
    return false;
  });
};

export default function ProductsList() {
  const initialState = Array(dropDownList.length).fill(false);
  const [dropDownState, setDropDownState] = useState<boolean[]>(initialState);
  const dropdownListNode = useRef<HTMLUListElement>(null);
  useEffect(() => {
    document.body.addEventListener('mousedown', (e) => {
      if (
        dropdownListNode.current &&
        e.target instanceof HTMLElement &&
        !dropdownListNode.current.contains(e.target)
      ) {
        setDropDownState(initialState);
      }
    });
  }, []);
  return (
    <ul ref={dropdownListNode} className={styles.productsList}>
      {productsList.map((link, i) => {
        return (
          <li
            key={link.content}
            className={styles.productsItem}
            onClick={() => setDropDownState(reducer(dropDownState, i))}
          >
            <button className={styles.productsButton}>{link.content}</button>
            {link.svgId ? <Icon id={link.svgId} className={styles.productsSvg}></Icon> : null}
            {dropDownState[i] ? (
              <ul className={styles.dropDownList}>
                {dropDownList[i].map((item) => (
                  <li className={styles.dropDownItem} key={item}>
                    <Link className={styles.dropDownLink} to={link.address}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
