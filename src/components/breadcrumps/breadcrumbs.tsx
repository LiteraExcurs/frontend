import Link from 'next/link';
import styles from './breadcrumps.module.scss';

const mockCrumbs = [
  {
    title: 'На главную',
    url: '/',
  },
  {
    title: 'Литературные прогулки',
    url: '',
  },
  {
    title: 'Из Москвы',
    url: '',
  },
  {
    title: 'Калуга',
    url: '',
    current: true,
  },
];

export const Breadcrumbs = () => {
  return (
    <nav className={styles['breadcrumbs']}>
      <ul className={styles['breadcrumbs__list']}>
        {mockCrumbs.map(({ title, url, current }, index) => {
          if (current) {
            return (
              <li key={index} className={styles['breadcrumbs__item']}>
                <span className={styles['breadcrumbs__item_current']}>
                  {title}
                </span>
              </li>
            );
          }

          if (url.length > 0) {
            return (
              <li key={index} className={styles['breadcrumbs__item']}>
                <Link href={url} className={styles['breadcrumbs__link']}>
                  {title}
                </Link>
              </li>
            );
          }

          if (url.length === 0) {
            return (
              <li key={index} className={styles['breadcrumbs__item']}>
                <span>{title}</span>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
