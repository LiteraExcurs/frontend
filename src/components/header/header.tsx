import Link from 'next/link';
import logo from '../../../public/images/LiteraEx_logo_color 2.svg';
import Image from 'next/image';
import { HeaderBar } from '../header-bar/index';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image className={styles.icon} src={logo} alt="Логотип компании" />
      </Link>
      <div className={styles.infoContainer}>
        <ul className={styles.navBar}>
          <li>
            <Link className={styles.navLink} href="/">
              На главную
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/">
              Литературные прогулки
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/">
              Литературный календарь
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/">
              Отзывы
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="/">
              Контакты
            </Link>
          </li>
        </ul>
        <HeaderBar />
      </div>
    </header>
  );
};
