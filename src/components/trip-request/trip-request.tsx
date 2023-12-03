'use client';

import { Button, ButtonType } from '@/ui/button';
import { Location } from '@/utils/types';

import styles from './trip-request.module.scss';

type TripRequestProps = {
  location: Location;
  groups: boolean;
};

export const TripRequest = ({ location, groups }: TripRequestProps) => {
  const commentLocationClass =
    location === Location.Region
      ? 'request__comment_location_region'
      : 'request__comment_location_capital';

  return (
    <div className={styles['request']}>
      <Button
        buttonType={ButtonType.Request}
        label="Оставить заявку"
        location={location}
        onClick={() => {}}
        extraClass={styles['request__button']}
      />
      {groups && (
        <span
          className={`${styles['request__comment']} ${styles[commentLocationClass]}`}
        >
          Также можно заказать мероприятие на предложенную вами дату для группы
          от 5 до 15 человек.
        </span>
      )}
    </div>
  );
};
