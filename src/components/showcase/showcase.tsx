'use client';

import { useSearchParams } from 'next/navigation';
import { Card } from '../card/index';
import { FilterBar } from '../filter-bar/index';
import styles from './showcase.module.scss';
import { useGetActivitiesByFilterQuery } from '@/services/api';

export type TEventCard = {
  createdAt: string;
  description: string;
  id: number;
  events: Array<Object>;
  image: string;
  isActive: boolean;
  isDeleted: boolean;
  location: string;
  name: string;
  season: string;
  slug: string;
  subtitle: string;
  type: string;
  updatedAt: string;
};
export const Showcase = () => {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get('tours');
  const { data: activities } = useGetActivitiesByFilterQuery(selectedFilter);
  // console.log(activities);

  return (
    <section>
      <h1 className={styles.title}>ЛИТЕРАТУРНЫЕ ПРОГУЛКИ</h1>
      <div className={styles.container}>
        <FilterBar />
        <ul className={styles.cardsZone}>
          {/* типы для activities и карточки описать позже, когда пойму, какие 
                    будут изменения в ней после прикручивания дат и 
                    евентов к активности */}
          {activities?.map((eventCard: TEventCard) => {
            return (
              <li key={eventCard.id}>
                <Card
                  name={eventCard.name}
                  location={eventCard.location}
                  picture={eventCard.image}
                  extraName={eventCard.subtitle}
                  slug={eventCard.slug}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
