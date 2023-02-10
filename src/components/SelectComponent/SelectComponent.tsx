import Select, { ActionMeta, GroupBase, PropsValue, SingleValue, StylesConfig } from 'react-select';
import { ISelectChoice } from '../../interfaces/ISelectChoice';

interface ISelect {
  options: ISelectChoice[];
  placeholder: string;
  styles: StylesConfig<ISelectChoice, false, GroupBase<ISelectChoice>>;
  value: PropsValue<ISelectChoice>;
  onChange: (
    newValue: SingleValue<ISelectChoice>,
    actionMeta: ActionMeta<ISelectChoice>
  ) => void | undefined;
}

export default function SelectComponent({
  options,
  placeholder,
  styles,
  value,
  onChange,
}: ISelect) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={styles}
      onChange={onChange}
      value={value}
    />
  );
}
