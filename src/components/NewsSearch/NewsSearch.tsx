import useSearch from '../../hooks/useSearch';
import Icon from '../Icon/Icon';
import styles from './newssearch.module.css';

export default function NewsSearch() {
  const { setInputValue, inputValue, handleChange, handleSubmit } = useSearch();
  return (
    <div className={styles.newsHeader}>
      <h2 className={styles.title}>Новости</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="Поиск по статьям"
            type="search"
            value={inputValue}
            onChange={handleChange}
          />
          <button className={styles.inputBtn} type="submit">
            <Icon id="#search" className={styles.btnSvg} />
          </button>
          {inputValue && (
            <div className={styles.close} onClick={() => setInputValue('')}>
              X
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
