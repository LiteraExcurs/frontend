import styles from './trip-date.module.scss';

type TripDateProps = {
  day?: number;
  month?: number;
  year?: number;
}

export const TripDate = ({
  day,
  month,
  year,
}: TripDateProps) => {
  return (
    <button className={styles.button}>
      {day ? day : '--'}.
      {month ? month : '--'}.
      {year ? year : '--'}
    </button>
  );
};
