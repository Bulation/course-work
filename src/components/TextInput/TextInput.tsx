import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import Icon from '../Icon/Icon';
import styles from './textinput.module.css';

interface ITextInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  rules: RegisterOptions;
  error: string | undefined;
  inputId: Path<T>;
  type: string;
  placeholder: string;
  svgId: string;
}

export default function TextInput<T extends FieldValues>(props: ITextInputProps<T>) {
  const { register, rules, error, inputId, type, placeholder, svgId } = props;
  return (
    <div className={styles.inputContainer}>
      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        type={type}
        placeholder={placeholder}
        {...register(inputId, rules)}
      />
      <span className={styles.errorMessage}>{error}</span>
      <Icon id={svgId} className={styles.inputSvg}></Icon>
      {error && <Icon id="#error" className={styles.errorSvg}></Icon>}
    </div>
  );
}
