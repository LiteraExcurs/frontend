import Link from 'next/link';
import styles from './breadcrumps.module.scss';

interface BreadcrumbsElementProps  {
  title: string | undefined;
  url: string;
  current?: boolean;
}

export type BreadcrumbsProps = {
  data: Array<BreadcrumbsElementProps>
}

export const Breadcrumbs = (data: BreadcrumbsProps) => {
  return (
    <nav className={styles['breadcrumbs']}>
      <ul className={styles['breadcrumbs__list']}>
        {data.data?.map(({ title, url, current }, index) => {
          if (title === '' || title === undefined) {
              return
          }
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
