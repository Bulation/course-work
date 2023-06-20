import Icon from '../Icon/Icon';
import styles from './flatspresentation.module.css';

interface IPresentationData {
  title: string;
  subtitle: JSX.Element;
  btn: string;
  colored?: boolean;
  imgPath?: string;
}

interface IFlatsPresentationProps {
  title: string;
  description: string;
  presentationData?: IPresentationData[];
}

export default function FlatsPresentation({
  title,
  description,
  presentationData,
}: IFlatsPresentationProps) {
  return (
    <>
      <h2 className={styles.searchFlatsTitle}>{title}</h2>
      <p className={styles.searchFlatsDescription}>{description}</p>
      <button className={styles.searchBtn}>
        <Icon id="#flatsMark" className={styles.searchSvg} />
        Открыть карту
      </button>
      <div className={styles.presentation}>
        {presentationData?.map((card, i) => (
          <div
            key={i}
            className={card.colored ? styles.presentationItemColored : styles.presentationItem}
          >
            <div className={styles.presentationItemHeader}>
              {card.imgPath && (
                <div className={styles.presentationItemIcon}>
                  <img src={card.imgPath} alt="" />
                </div>
              )}
              <h3
                className={
                  card.colored ? styles.presentationItemTitleColored : styles.presentationItemTitle
                }
              >
                {card.title}
              </h3>
            </div>
            <div
              className={
                card.colored
                  ? styles.presentationItemDescriptionColored
                  : styles.presentationItemDescription
              }
            >
              {card.subtitle}
            </div>
            <button
              className={card.colored ? styles.presentationBtnColored : styles.presentationBtn}
            >
              {card.btn}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
