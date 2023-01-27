import styles from './formmodal.module.css';

interface IFormModalProps {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  children: JSX.Element;
}

export default function FormModal(props: IFormModalProps) {
  const { isModalOpen, setModalOpen, children } = props;
  return (
    <div
      onClick={() => setModalOpen(false)}
      className={`${styles.formOverlay} ${styles.hidden} ${isModalOpen ? styles.show : ''}`}
    >
      <div className={`${styles.formModal} ${styles.hidden} ${isModalOpen ? styles.show : ''}`}>
        <div className={styles.formModalContainer}>{children}</div>
      </div>
    </div>
  );
}
