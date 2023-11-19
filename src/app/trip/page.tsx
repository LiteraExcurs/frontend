import Image from 'next/image';

import { Breadcrumbs } from '@/components/breadcrumps';
import { TripDate } from '@/components/trip-date';
import { TripRequest } from "@/components/trip-request";
import { Location } from '@/utils/types';

import styles from './trip.module.scss';

type TripPageProps = {
  location: Location;
  title: string;
  subtitle: string;
  date: string | null;
  delay: string;
  text: string;
  pic: string;
  comment: string;
  price: number;
}

const mockData: TripPageProps = {
  location: Location.Region,
  title: 'Калуга',
  subtitle: 'По столицам российских губерний',
  date: null,
  delay: 'Однодневная/двухдневная экскурсия для небольшой компании',
  text: `Прогуляемся по старинным улочкам Калуги, увидим мост акведук XVIII
         столетия, с горячим кофе в руках обойдем всё самое интересное и,
         пообедав в кафе с потрясающим видом, отправимся в закулисье одного
         старейших театров России. А двухдневная поездка включает также
         просмотр спектакля. И конечно, познакомимся с удивительной
         архитектурой и тайнами этого древнего города.`,
  pic: '/images/trip.png',
  comment: 'Также можно заказать мероприятие на предложенную вами дату для группы от 5 до 15 человек.',
  price: 3500,
}

export default function TripPage() {
  const {
    location,
    title,
    subtitle,
    delay,
    date,
    text,
    pic ,
    comment,
    price,
  } = mockData;

  const tripLocationClass =
    location === Location.Region ? 'trip_location_region' : 'trip_location_capital';
  const subtitleLocationClass =
    location === Location.Region ? 'trip__subtitle_location_region' : 'trip__subtitle_location_capital';
  const priceLocationClass =
    location === Location.Region ? 'price__value_location_region' : 'price__value_location_capital';

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
                {subtitle.length > 0 &&
                  <span className={`${styles['trip__subtitle']} ${styles[subtitleLocationClass]}`}>
                    {subtitle}
                  </span>
                }
                {delay.length > 0 &&
                  <span className={styles['trip__delay']}>
                    {delay}
                  </span>
                }
                {title.length > 0 &&
                  <h1 className={styles['trip__title']}>
                    {title}
                  </h1>
                }
              </div>
              <TripDate location={location} date={date ? date : undefined}/>
            </div>
            <p className={styles['trip__text']}>
              {text}
            </p>
            {price && price > 0 &&
              <div className={styles['price']}>
                <span className={`${styles['price__value']} ${styles[priceLocationClass]}`}>
                  {price} <span className={styles['price__currency']}>₽</span>
                </span>
                <span className={styles['price__persons']}>
                  Стоимость для 1 чел.
                </span>
                <p className={styles['trip__comment']}>
                  {comment}
                </p>
              </div>
            }
            <TripRequest location={location} />
          </div>
        </div>
      </div>
    </section>
  );
};
