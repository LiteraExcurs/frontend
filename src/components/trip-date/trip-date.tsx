import styles from './trip-date.module.scss';
import { Location } from '@/utils/types';

type TripDateProps = {
  location: Location;
  date?: string;
};

export const TripDate = ({ location, date }: TripDateProps) => {
  const tripDateLocationClass =
    location === Location.Region
      ? 'date_location_region'
      : 'date_location_capital';

  return (
    <button className={`${styles['date']} ${styles[tripDateLocationClass]}`}>
      {date ? `${date}` : `--.--.${new Date().getFullYear()}`}
    </button>
  );
};
