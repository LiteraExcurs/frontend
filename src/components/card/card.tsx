import Link from 'next/link';
import styles from './card.module.scss';
import { Button } from '@/ui/button';
import { ButtonType } from '@/ui/button/types';
import { Location } from '@/utils/types';

type CardProps = {
  location: string;
  picture: string;
  name: string;
  extraName?: string;
  slug: string;
};

export const Card = ({
  location,
  picture,
  name,
  extraName,
  slug,
}: CardProps) => {
  return (
    <Link href={`/trip/${slug}`} className={styles.card}>
      <img className={styles.image} src={picture} alt="обложка экскурсии" />
      <Button
        buttonType={ButtonType.Card}
        label={name}
        text={extraName ?? ''}
        location={location === 'capital' ? Location.Capital : Location.Region}
        extraClass={styles.button}
      />
    </Link>
  );
};
