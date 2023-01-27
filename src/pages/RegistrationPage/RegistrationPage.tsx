import { Link } from 'react-router-dom';
import styles from './registration.module.css';
import commonStyles from '../../commonstyles.module.css';
import TextInput from '../../components/TextInput/TextInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Icon from '../../components/Icon/Icon';
import { useEffect, useState } from 'react';
import FormModal from '../../components/FormModal/FormModal';

type FormValues = {
  login: string;
  mail: string;
  password: string;
  confirmPassword: string;
};
const MIN_VALUE = 3;

const loginRules = {
  required: {
    value: true,
    message: 'This field is required',
  },
  minLength: {
    value: MIN_VALUE,
    message: 'Length of name should be more than 3 symbols',
  },
};

const mailRules = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[-_A-Za-zА-Яа-яЁё\d]{3,15}@[A-Za-z]{2,}.[A-Za-z]{2,}$/,
    message:
      'email must contains from 3 to 15 characters (letters, numbers, underscore, hyphen), must not contains spaces, must contains @, first level domain with as minimum 2 characters, top-level domain with as minimum 2 characters',
  },
};

const passwordRules = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message:
      'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  },
};

export default function RegistrationPage() {
  // add google recaptcha
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitted, isSubmitSuccessful, errors, isValid },
  } = useForm<FormValues>();
  const confirmPasswordRules = {
    required: {
      value: true,
      message: 'This field is required',
    },
    validate: (val: string) => {
      if (watch('password') != val) {
        return 'Passwords are not equal';
      }
    },
  };
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const onSubmit: SubmitHandler<FieldValues> = () => {
    setRegistrationSuccessful(true);
    setModalOpen(true);
    console.log(1);
  };
  return (
    <section className={`${commonStyles.section} ${styles.formSection}`}>
      {!isRegistrationSuccessful ? (
        <form action="#" className={commonStyles.formModal} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <div className={styles.leftColumn}>
              <h2 className={commonStyles.modalTitle}>Регистрация</h2>
              <div className={styles.inputWrapper}>
                <TextInput
                  register={register}
                  rules={loginRules}
                  error={errors.login?.message}
                  inputId="login"
                  type="text"
                  placeholder="Логин"
                  svgId="#user"
                />
              </div>
              <div className={styles.inputWrapper}>
                <TextInput
                  register={register}
                  rules={mailRules}
                  error={errors.mail?.message}
                  inputId="mail"
                  type="email"
                  placeholder="Электронная почта"
                  svgId="#mail"
                />
              </div>
              <div className={styles.inputWrapper}>
                <TextInput
                  register={register}
                  rules={passwordRules}
                  error={errors.password?.message}
                  inputId="password"
                  type="password"
                  placeholder="Пароль"
                  svgId="#password"
                />
              </div>
              <div className={styles.inputWrapper}>
                <TextInput
                  register={register}
                  rules={confirmPasswordRules}
                  error={errors.confirmPassword?.message}
                  inputId="confirmPassword"
                  type="password"
                  placeholder="Повторите пароль"
                  svgId="#password"
                />
              </div>
              {isSubmitted && !isSubmitSuccessful && !isValid && (
                <div className={`${commonStyles.modalButton} ${styles.validationError}`}>
                  <span>Ошибка ввода</span> <Icon id="#error" className={styles.errorMessageSvg} />
                </div>
              )}
              <button type="submit" className={commonStyles.modalButton} disabled={!isDirty}>
                Зарегистрироваться
              </button>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.rulesContainer}>
                <h3 className={styles.rulesTitle}>Пользователь обязуется:</h3>
                <ul className={styles.rulesList}>
                  <li className={styles.rulesItem}>
                    предоставлять достоверную и актуальную информацию при регистрации и добавлении
                    объекта;
                  </li>
                  <li className={styles.rulesItem}>
                    добавлять фотографии объектов соответствующие действительности. Администрация
                    сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную
                    пользователем, если сочтет, что информация не соответствует действительности,
                    носит оскорбительный характер, нарушает права и законные интересы других граждан
                    либо действующее законодательство Республики Беларусь.
                  </li>
                </ul>
              </div>
              <p className={styles.accountInfo}>
                Уже есть аккаунта?{' '}
                <Link className={styles.authLink} to="/auth">
                  Войдите
                </Link>
              </p>
            </div>
          </div>
        </form>
      ) : (
        <FormModal isModalOpen={isModalOpen} setModalOpen={(value: boolean) => setModalOpen(value)}>
          <>
            <h2 className={commonStyles.modalTitle}>Подтвердите регистрацию</h2>
            <p className={commonStyles.modalText}>
              Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в
              письме. Если письма нет, то проверьте спам.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className={commonStyles.modalButton}
              type="button"
            >
              Понятно
            </button>
          </>
        </FormModal>
      )}
    </section>
  );
}
