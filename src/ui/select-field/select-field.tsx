import { useState } from 'react';
import styles from '@/ui/input-field/basic-input.module.scss';
import { TEventsData } from '@/components/trip-request/types';

export const SelectField = (data: { data: TEventsData }) => {
  const getEvents = () => {
    if (data.data) {
      return data.data;
    }
    return [
      {
        date: '-',
      },
    ];
  };

  return (
    <div>
      <select className={styles.input} id="cities">
        {getEvents().map((event, index) => {
          return (
            <option key={index}>
              {new Date(event.date).toLocaleString('ru', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </option>
          );
        })}
      </select>
    </div>
  );
};
