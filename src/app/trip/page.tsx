'use client';

import Image from 'next/image';

import { Button, ButtonType, Location } from '@/ui/button';
import { Breadcrumps } from '@/components/breadcrumps';
import { TripDate } from '@/components/trip-date';

import styles from './trip.module.scss';

// {
//   type,
//   date,
//   title,
//   subtitle,
//   duration,
//   text,
//   pic,
//   price,
// }

export default function TripPage() {
  return (
    <div className={styles['trip']}>
      <Breadcrumps />
      <section className={styles['trip__section']}>
        <Image
          className={styles['trip__pic']}
          src="/images/trip.png"
          alt=""
          width={420}
          height={625}
        />
        <div className={styles['trip__content']}>
          <div className={styles['trip__header']}>
            <div className={styles['trip__desc']}>
              <span className={styles['trip__subtitle']}>
                По столицам российских губерний
              </span>
              <span className={styles['trip__delay']}>
                Однодневная/двухдневная экскурсия для небольшой компании
              </span>
              <h1 className={styles['trip__title']}>Калуга</h1>
            </div>
            <TripDate year={2023} />
          </div>
          <p className={styles['trip__text']}>
            Прогуляемся по старинным улочкам Калуги, увидим мост акведук XVIII
            столетия, с горячим кофе в руках обойдем всё самое интересное и,
            пообедав в кафе с потрясающим видом, отправимся в закулисье одного
            старейших театров России. А двухдневная поездка включает также
            просмотр спектакля. И конечно, познакомимся с удивительной
            архитектурой и тайнами этого древнего города.
          </p>
          <div className={styles['price']}>
            <span className={styles['price__value']}>3500</span>
            <span className={styles['price__payfor']}>
              Стоимость для 1 чел.
            </span>
            <p className={styles['trip__comment']}>
              Желающих присоединиться просим оставить заявку - вышлем детали
              поездки и обсудим путешествие.
            </p>
          </div>
          <div className={styles['trip__request']}>
            <Button
              buttonType={ButtonType.Request}
              label="Оставить заявку"
              location={Location.Region}
              onClick={() => {}}
              extraClass={styles['trip__button']}
            />
            <span className={styles['trip__comment']}>
              Также можно заказать мероприятие на предложенную вами дату для
              группы от 5 до 15 человек.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
