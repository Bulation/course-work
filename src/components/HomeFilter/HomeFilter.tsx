import { useState } from 'react';
import { productsList } from '../../data/data';
import Filter from '../Filter/Filter';
import styles from './homefilter.module.css';

export default function HomeFilter() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  return (
    <section className={styles.filterSection}>
      <div className={styles.filterContainer}>
        <h1 className={styles.title}>
          Sdaem.by - у нас живут <span className={styles.titleColored}>ваши объявления</span>
        </h1>
        <ul className={styles.filterList}>
          {productsList.map((product, i) => (
            <li
              key={product.content}
              className={`${styles.filterListItem} ${
                activeProductIndex === i ? styles.activeItem : ''
              }`}
              onClick={() => setActiveProductIndex(i)}
            >
              {product.content}
            </li>
          ))}
        </ul>
        <Filter />
      </div>
    </section>
  );
}
