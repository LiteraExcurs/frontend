import { InputField } from '@/ui/input-field/index';
import Image from 'next/image';
import Link from 'next/link';
import phoneIcon from '../../../public/images/8666632_phone_icon 1.svg';
import mailIcon from '../../../public/images/8666723_mail_icon 1.svg';
import tgIcon from '../../../public/images/8134646_logo_telegram_icon 1.svg';
import vkIcon from '../../../public/images/vk_fzvk76or0cbp_512 1.svg';
import styles from './header-bar.module.scss';
import { ChangeEvent } from 'react';

export const HeaderBar = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className={styles.container}>
      <InputField
        type="search"
        name="search"
        onChange={onChange}
        value={''}
      />
      <ul className={styles.iconZone}>
        <li>
          <Link href="/">
            <Image src={phoneIcon} alt="Иконка телефона" />
            <p>Заказать звонок</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={mailIcon} alt="Иконка телефона" />
            <p>Напишите нам</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={tgIcon} alt="Иконка телефона" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={vkIcon} alt="Иконка телефона" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
