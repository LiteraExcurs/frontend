'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Modal } from '../modal';
import { Button, ButtonType } from '@/ui/button';
import { RequestForm } from '@/components/request-form';
import { Location } from '@/utils/types';
import { RequestData, TEvent, TEventsData } from './types';

import styles from './trip-request.module.scss';

type TripRequestProps = {
  location: Location;
  groups: boolean;
  path: string;
  events: TEventsData;
};

export const TripRequest = ({
  location,
  groups,
  path,
  events,
}: TripRequestProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showRequestModal = searchParams.has('request');

  const commentLocationClass =
    location === Location.Region
      ? 'request__comment_location_region'
      : 'request__comment_location_capital';

  const closeRequestModal = () => {
    router.replace(path, { scroll: false });
  };

  const sendRequest = (data: RequestData) => {
    closeRequestModal();
  };

  return (
    <>
      {showRequestModal && (
        <Modal
          title="Оставить заявку"
          subtitle={events[0].name}
          closeFn={closeRequestModal}
        >
          <RequestForm
            onSubmit={sendRequest}
            eventName={events[0].name}
            events={events}
            eventId={events[0].id}
          />
        </Modal>
      )}

      <div className={styles['request']}>
        <Button
          buttonType={ButtonType.Request}
          label="Оставить заявку"
          location={location}
          onClick={() => router.push(`${path}?request`, { scroll: false })}
          extraClass={styles['request__button']}
        />
        {groups && (
          <span
            className={`${styles['request__comment']} ${styles[commentLocationClass]}`}
          >
            Также можно заказать мероприятие на предложенную вами дату для
            группы от 5 до 15 человек.
          </span>
        )}
      </div>
    </>
  );
};
