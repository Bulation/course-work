import { Link } from 'react-router-dom';
import commonStyles from '../../commonstyles.module.css';
import TextInput from '../../components/TextInput/TextInput';
import styles from './authpage.module.css';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import Portal from '../../components/Portal/Portal';
import FormModal from '../../components/FormModal/FormModal';

type FormValues = {
  login: string;
  password: string;
};

export default function AuthPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUserExist, setUserExist] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FieldValues> = () => {
    setUserExist(false);
  };
  return (
    <>
      <section className={`${commonStyles.section} ${styles.formSection}`}>
        <form action="#" onSubmit={handleSubmit(onSubmit)} className={commonStyles.formModal}>
          <div className={styles.formContainer}>
            <h2 className={`${commonStyles.modalTitle} ${styles.authTitle}`}>Авторизация</h2>
            <p className={`${commonStyles.modalText} ${styles.authText}`}>
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
              <Link className={styles.forgotPasswordLink} to="/">
                Забыли пароль?
              </Link>
            </div>
            {!isUserExist && <p className={styles.errorMessage}>Неверный логин или пароль</p>}
            <button type="submit" className={commonStyles.modalButton} disabled={!isDirty}>
              Войти
            </button>
            <p className={styles.accountInfo}>
              Ещё нет аккаунта?{' '}
              <Link className={styles.regLink} to="/registration">
                Создайте аккаунт
              </Link>
            </p>
          </div>
        </form>
      </section>
      <Portal>
        <FormModal isModalOpen={isModalOpen} setModalOpen={(value: boolean) => setModalOpen(value)}>
          <>
            <h2 className={commonStyles.modalTitle}>Вы успешно авторизовались</h2>
            <Link onClick={() => setModalOpen(false)} className={commonStyles.modalButton} to="/">
              Вернуться на главную
            </Link>
          </>
        </FormModal>
      </Portal>
    </>
  );
}
