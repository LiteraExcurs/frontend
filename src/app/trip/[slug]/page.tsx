'use client';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumps';
import { TripDate } from '@/components/trip-date';
import { TripRequest } from '@/components/trip-request';
import { Location } from '@/utils/types';
import styles from './trip.module.scss';
import { usePathname } from 'next/navigation';
import { useGetTripQuery } from '@/services/api';
import { crumbsData } from '@/data/crumbsData';
import { TEventsData } from '@/components/trip-request/types';

type TripPageProps = {
  location: Location;
  title: string;
  subtitle: string;
  date: string | null;
  text: string;
  image: string;
  groups: boolean;
  price: number;
  events: TEventsData;
  slug: string;
};

type TCustomParams = {
  params: {
    slug: string;
  };
};
export default function TripPage(params: TCustomParams) {
  const slug = params.params.slug;
  const pathname = usePathname();


  //TODO: Нужно типизировать входящие данные.
  const { data: tripData, isSuccess } = useGetTripQuery(slug);

  //todo: Перенести переключатели стилей в отдельный файл
  const tripLocationClass =
    tripData?.location === Location.Region
      ? 'trip_location_region'
      : 'trip_location_capital';
  const subtitleLocationClass =
    tripData?.location === Location.Region
      ? 'trip__subtitle_location_region'
      : 'trip__subtitle_location_capital';
  const commentLocationClass =
    tripData?.location === Location.Region
      ? 'trip__comment_location_region'
      : 'trip__comment_location_capital';
  const priceLocationClass =
    tripData?.location === Location.Region
      ? 'price__value_location_region'
      : 'price__value_location_capital';

  const tripDate = new Date(tripData?.events[0]?.date).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <section className={`${styles['trip']} ${styles[tripLocationClass]}`}>
      {isSuccess && (
        <div className={styles['trip__container']}>
          {<Breadcrumbs data={crumbsData(tripData)} />}
          <div className={styles['trip__section']}>
            {/* <Image
            className={styles['trip__pic']}
            src={tripData.image}
            alt={tripData.name}
            width={420}
            height={625}
          /> */}
            <img
              className={styles['trip__pic']}
              src={tripData.image}
              alt={tripData.name}
            />
            <div className={styles['trip__content']}>
              <div className={styles['trip__header']}>
                <div className={styles['trip__desc']}>
                  {tripData.name.length > 0 && (
                    <h1 className={styles['trip__title']}>{tripData.name}</h1>
                  )}
                  {tripData.subtitle.length > 0 && (
                    <span
                      className={`${styles['trip__subtitle']} ${styles[subtitleLocationClass]}`}
                    >
                      {tripData.subtitle}
                    </span>
                  )}
                </div>
                <TripDate
                  location={tripData.location}
                  date={!tripData?.events[0]?.date ? undefined : tripDate}
                />
              </div>
              <p className={styles['trip__text']}>{tripData.description}</p>
              {tripData.price && tripData.price > 0 && (
                <div className={styles['price']}>
                  <span
                    className={`${styles['price__value']} ${styles[priceLocationClass]}`}
                  >
                    {tripData.price}{' '}
                    <span className={styles['price__currency']}>₽</span>
                  </span>
                  <span className={styles['price__persons']}>
                    Стоимость для 1 чел.
                  </span>
                  <p
                    className={`${styles['trip__comment']} ${styles[commentLocationClass]}`}
                  >
                    Желающих присоединиться просим оставить заявку - вышлем
                    детали поездки и обсудим путешествие.
                  </p>
                </div>
              )}
              <TripRequest
                location={tripData.location}
                groups={true}
                path={pathname}
                events={tripData.events}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
