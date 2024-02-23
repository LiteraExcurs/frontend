import Link from 'next/link';
import styles from './card.module.scss';
import Image from 'next/image';
import { Button } from '@/ui/button';
import { ButtonType } from '@/ui/button/types';
import { Location } from '@/utils/types';

type CardProps = {
  location: string;
  picture: string;
  name: string;
  extraName?: string;
};

export const Card = ({ location, picture, name, extraName }: CardProps) => {
  return (
    <Link href="/" className={styles.card}>
      {/* когда появятся картинки на беке, заменю img на <Image /> */}
      <img className={styles.image} src={picture} alt="обложка экскурсии" />
      <Button
        buttonType={ButtonType.Card}
        label={name}
        text={extraName}
        location={location === 'Moscow' ? Location.Capital : Location.Region}
        extraClass={styles.button}
      />
    </Link>
  );
};
