import styles from './errormessage.module.css';

export default function ErrorMessage() {
  return (
    <>
      <h2 className={styles.errorTitle}>Произошла ошибка</h2>
      <p className={styles.errorText}>
        К сожалению не удалось загрузить данные. Попробуйте повторить позже.
      </p>
    </>
  );
}
