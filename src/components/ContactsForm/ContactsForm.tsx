import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './contactsform.module.css';
import commonStyles from '../../commonstyles.module.css';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import FormModal from '../FormModal/FormModal';
import Portal from '../Portal/Portal';

const MIN_VALUE = 3;
type FormValues = {
  username: string;
  mail: string;
  textarea: string;
};

const usernameRules = {
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

export default function ConctactsForm() {
  // get info of logged
  // import modal styles from common styles, add state for modal, add state for form
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FieldValues> = () => {
    reset();
    setModalOpen(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactsForm}>
        <div className={styles.formContainer}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              <label className={styles.label} htmlFor="username">
                Ваше имя
              </label>
              <TextInput<FormValues>
                register={register}
                rules={usernameRules}
                error={errors.username?.message}
                inputId="username"
                type="text"
                placeholder="Имя"
                svgId="#user"
              ></TextInput>
            </div>
            <div className={styles.userMail}>
              <label className={styles.label} htmlFor="mail">
                Ваша электронная почта
              </label>
              <TextInput<FormValues>
                register={register}
                rules={mailRules}
                error={errors.mail?.message}
                inputId="mail"
                type="email"
                placeholder="Почта"
                svgId="#mail"
              ></TextInput>
            </div>
          </div>
          <div className={styles.textareaContainer}>
            <label className={styles.label} htmlFor="textarea">
              Ваше сообщение
            </label>
            <textarea
              name="textarea"
              id="textarea"
              cols={30}
              rows={10}
              placeholder="Сообщение"
              className={styles.textarea}
            ></textarea>
          </div>
          <button className={styles.formButton} type="submit" disabled={!isDirty}>
            Отправить
          </button>
        </div>
      </form>
      <Portal>
        <FormModal isModalOpen={isModalOpen} setModalOpen={(value: boolean) => setModalOpen(value)}>
          <>
            <h2 className={commonStyles.modalTitle}>Ваше письмо отправлено!</h2>
            <p className={commonStyles.modalText}>
              Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо
              отправлено.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className={commonStyles.modalButton}
              type="button"
            >
              Закрыть окно
            </button>
          </>
        </FormModal>
      </Portal>
    </>
  );
}
