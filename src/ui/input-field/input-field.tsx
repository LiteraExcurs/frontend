import styles from './input-field.module.scss';
import searchIcon from '../../../public/images/Vector.svg';
import Image from 'next/image';
import { BasicInput } from '@/ui/input-field/basic-input';

type InputFieldProps = {
  name: string;
  type?: 'basic' | 'search' | 'subscribe';
  value: string;
  placeholder?: string;
  onChange: (evt: any) => void;
};

export const InputField = ({
  name,
  type = 'basic',
  value,
  placeholder = '',
  onChange,
}: InputFieldProps) => {
  if (type === 'basic') {
    return (
      <BasicInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  return type === 'search' ? (
    <div className={styles.searchZone}>
      <input className={styles.inputSearch} placeholder="Поиск"></input>
      <button className={styles.iconButton}>
        <Image
          className={styles.icon}
          src={searchIcon}
          alt="Изображение лупы"
        />
      </button>
    </div>
  ) : (
    <input
      className={styles.inputSubs}
      placeholder="e-mail@example.com"
    ></input>
  );
};
