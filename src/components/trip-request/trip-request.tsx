'use client'

import { Button, ButtonType } from "@/ui/button";
import { Location } from "@/utils/types";

import styles from "./trip-request.module.scss";

type TripRequestProps = {
  location: Location;
}

export const TripRequest = ({ location }: TripRequestProps) => {
  return (
    <div className={styles['request']}>
      <Button
        buttonType={ButtonType.Request}
        label="Оставить заявку"
        location={location}
        onClick={() => {}}
        extraClass={styles['request__button']}
      />
      <span className={styles['request__comment']}>
        Желающих присоединиться просим оставить заявку - вышлем детали поездки и обсудим путешествие.
      </span>
    </div>
  );
};
