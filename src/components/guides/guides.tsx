import Image from 'next/image';
import styles from './guides.module.scss';
import bigLogo from '../../../public/images/LiteraEx_sign_black 3.svg';
import { useGetGuidesQuery } from '@/services/api';

type TGuide = {
  completed: number;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  isActive: true;
  location: string;
  name: string;
  rating: number;
  updatedAt: string;
};

export const Guides = () => {
  const { data: guides, isLoading } = useGetGuidesQuery();
  console.warn(guides);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>НАШИ РАССКАЗЧИЦЫ</h2>
      <Image
        className={styles.backgroundLogo}
        src={bigLogo}
        alt="Полупрозрачное изображение логотипа на фоне страницы"
      />
      {guides?.map((guide: TGuide) => {
        return (
          <article key={guide.id} className={styles.article}>
            <div className={styles.column}>
              <h4 className={styles.columnName}>{guide.name}</h4>
              <p className={styles.columnText}>{guide.description}</p>
            </div>
            {/* когда появятся картинки на беке, заменю img на <Image /> */}
            <img
              className={styles.image}
              src={guide.image}
              alt={`Фотография ${guide.name}`}
            />
          </article>
        );
      })}
    </section>
  );
};
