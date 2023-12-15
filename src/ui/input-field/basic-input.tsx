import styles from './basic-input.module.scss';

type BasicInputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (evt: any) => void;
};

export const BasicInput = ({
  name,
  placeholder,
  value,
  onChange,
}: BasicInputProps) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      className={styles.input}
    />
  );
};
