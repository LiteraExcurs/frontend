import Image from 'next/image';

import { Breadcrumbs } from '@/components/breadcrumps';
import { TripDate } from '@/components/trip-date';
import { TripRequest } from '@/components/trip-request';
import { Location } from '@/utils/types';

import styles from './trip.module.scss';

type TripPageProps = {
  location: Location;
  title: string;
  subtitle: string;
  date: string | null;
  text: string;
  pic: string;
  groups: boolean;
  price: number;
};

const mockData: TripPageProps = {
  location: Location.Region,
  title: 'Зарайск',
  subtitle: 'Двухдневное путешествие для небольшой компании',
  date: null,
  text: `Узнаем об историческом прошлом города и о его знаменитых уроженцах. Прогуляемся по самому маленькому Кремлю России. Посетим дом-музей удивительного скульптора А.С. Голубкиной. Прогуляемся к «родовому гнезду» Фёдора Михайловича Достоевского и, если позволит погода, устроим пикник.`,
  pic: '/images/trip.png',
  groups: true,
  price: 3500,
};

export default function TripPage() {
  const { location, title, subtitle, date, text, pic, groups, price } =
    mockData;

  const tripLocationClass =
    location === Location.Region
      ? 'trip_location_region'
      : 'trip_location_capital';
  const subtitleLocationClass =
    location === Location.Region
      ? 'trip__subtitle_location_region'
      : 'trip__subtitle_location_capital';
  const commentLocationClass =
    location === Location.Region
      ? 'trip__comment_location_region'
      : 'trip__comment_location_capital';
  const priceLocationClass =
    location === Location.Region
      ? 'price__value_location_region'
      : 'price__value_location_capital';

  return (
    <section className={`${styles['trip']} ${styles[tripLocationClass]}`}>
      <div className={styles['trip__container']}>
        <Breadcrumbs />
        <div className={styles['trip__section']}>
          <Image
            className={styles['trip__pic']}
            src={pic}
            alt={title}
            width={420}
            height={625}
          />
          <div className={styles['trip__content']}>
            <div className={styles['trip__header']}>
              <div className={styles['trip__desc']}>
                {title.length > 0 && (
                  <h1 className={styles['trip__title']}>{title}</h1>
                )}
                {subtitle.length > 0 && (
                  <span
                    className={`${styles['trip__subtitle']} ${styles[subtitleLocationClass]}`}
                  >
                    {subtitle}
                  </span>
                )}
              </div>
              <TripDate location={location} date={date ? date : undefined} />
            </div>
            <p className={styles['trip__text']}>{text}</p>
            {price && price > 0 && (
              <div className={styles['price']}>
                <span
                  className={`${styles['price__value']} ${styles[priceLocationClass]}`}
                >
                  {price} <span className={styles['price__currency']}>₽</span>
                </span>
                <span className={styles['price__persons']}>
                  Стоимость для 1 чел.
                </span>
                <p
                  className={`${styles['trip__comment']} ${styles[commentLocationClass]}`}
                >
                  Желающих присоединиться просим оставить заявку - вышлем детали
                  поездки и обсудим путешествие.
                </p>
              </div>
            )}
            <TripRequest location={location} groups={groups} />
          </div>
        </div>
      </div>
    </section>
  );
}
