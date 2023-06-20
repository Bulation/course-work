import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import styles from './authpage.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Portal from '../../components/Portal/Portal';
import FormModal from '../../components/FormModal/FormModal';
import { SITE_URL } from '../../constants/constants';

type FormValues = {
  login: string;
  password: string;
};

export default function AuthPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUserExist, setUserExist] = useState(true);
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(false);
  const name = localStorage.getItem('name');
  const password = localStorage.getItem('password');
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.login !== name || data.password !== password) {
      setUserExist(false);
    } else {
      setIsAuthSuccessful(true);
      localStorage.setItem('isLogout', 'false');
      setTimeout(() => {
        navigate(`${SITE_URL}`);
      }, 1000);
    }
  };
  return (
    <>
      {!isAuthSuccessful ? (
        <section className={`${styles.section} ${styles.formSection}`}>
          <form action="#" onSubmit={handleSubmit(onSubmit)} className={styles.formModal}>
            <div className={styles.formContainer}>
              <h2 className={`${styles.modalTitle} ${styles.authTitle}`}>Авторизация</h2>
              <p className={`${styles.modalText} ${styles.authText}`}>
                Авторизируйтесь, чтобы начать публиковать свои объявления
              </p>
              <div className={styles.inputWrapper}>
                <TextInput<FormValues>
                  register={register}
                  rules={{}}
                  error={errors.login?.message}
                  inputId="login"
                  type="text"
                  placeholder="Логин"
                  svgId="#user"
                />
              </div>
              <div className={styles.inputWrapper}>
                <TextInput<FormValues>
                  register={register}
                  rules={{}}
                  error={errors.password?.message}
                  inputId="password"
                  type="password"
                  placeholder="Пароль"
                  svgId="#password"
                />
              </div>
              <div className={styles.rememberContainer}>
                <label className={styles.toggle}>
                  <input className={styles.toggleCheckbox} type="checkbox" />
                  <span className={styles.toggleSwitch}></span>
                  <span className={styles.toggleLabel}>Запомнить меня</span>
                </label>
                <Link className={styles.forgotPasswordLink} to={`${SITE_URL}`}>
                  Забыли пароль?
                </Link>
              </div>
              {!isUserExist && <p className={styles.errorMessage}>Неверный логин или пароль</p>}
              <button type="submit" className={styles.modalButton} disabled={!isDirty}>
                Войти
              </button>
              <p className={styles.accountInfo}>
                Ещё нет аккаунта?{' '}
                <Link className={styles.regLink} to={`${SITE_URL}registration`}>
                  Создайте аккаунт
                </Link>
              </p>
            </div>
          </form>
        </section>
      ) : (
        <Portal>
          <FormModal
            isModalOpen={isModalOpen}
            setModalOpen={(value: boolean) => setModalOpen(value)}
          >
            <>
              <h2 className={styles.modalTitle}>Вы успешно авторизовались</h2>
              <Link
                onClick={() => setModalOpen(false)}
                className={styles.modalButton}
                to={`${SITE_URL}`}
              >
                Вернуться на главную
              </Link>
            </>
          </FormModal>
        </Portal>
      )}
    </>
  );
}
