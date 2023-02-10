import styles from './flatforday.module.css';
export default function FlatForDay() {
  return (
    <div className={styles.flatForDayDescription}>
      <p className={styles.flatSubtitle}>Что такое Sdaem.by</p>
      <h2 className={styles.flatTitle}>Квартира на сутки в Минске</h2>
      <div className={styles.flatImgContainer}>
        <img src="/img/flat.png" alt="" />
      </div>
      <h4 className={styles.flatForDayTextTitle}>Нужна квартира на сутки в Минске?</h4>
      <p className={styles.flatForDayText}>
        На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает{' '}
        <b>более 500 квартир.</b> Благодаря удобной навигации вы быстро найдете подходящий вариант.
      </p>
      <p className={styles.flatForDayText}>
        В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим
        количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
        с джакузи.
      </p>
      <p className={styles.flatForDayText}>
        Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с
        владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены
        исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости
        взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут
        совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.{' '}
      </p>
    </div>
  );
}
