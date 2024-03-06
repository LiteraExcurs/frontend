import { useState } from 'react';
import styles from '@/ui/input-field/basic-input.module.scss';
import { TEventsData } from '@/components/trip-request/types';

export const SelectField = (data: TEventsData) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <select className={styles.input} id="cities">
        {data && data?.map(({date}, index) => {
         return <option key={index}>{date}</option>;
        })}
      </select>
    </div>
  );
};
