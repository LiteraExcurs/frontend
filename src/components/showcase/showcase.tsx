"use client"

import { useSearchParams } from 'next/navigation'
import { Card } from '../card/index'
import { FilterBar } from '../filter-bar/index'
import styles from './showcase.module.scss'

export const MockData = [
    {
        location: 'Moscow',
        picture: 'https://photos.wikimapia.org/p/ot2/00/00/03/65/93_big.jpg'
    },
    {
        location: 'Moscow',
        picture: 'https://moscowseasons.com/uploads/2021/05/28/60b0b1782d54a.jpeg'
    },
    {
        location: 'Moscow',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4N3Pw2_65nnhft8rveLM-_Y84moJrys2gQ&usqp=CAU'
    },
    {
        location: 'Kaluga',
        picture: 'https://cdn.tripster.ru/thumbs2/aeb33930-90f1-11ec-8cbb-e6705efd32d8.800x600.jpeg'
    },
    {
        location: 'Zaraysk',
        picture: 'https://avatars.mds.yandex.net/get-marketcms/1490511/img-3e8cbf26-c0b4-4efd-9103-69441e2959ac.jpeg/optimize'
    },
    {
        location: 'Moscow',
        picture: 'https://aif-s3.aif.ru/images/005/414/4eaa713a52b8235279d7e32f0e465c08.jpg'
    },
    {
        location: 'Moscow',
        picture: 'https://i0.wp.com/design-fly.ru/wp-content/uploads/2017/08/%D0%B05.jpg'
    },
    {
        location: 'Moscow',
        picture: 'https://progulkipomoskve.ru/foto/dom/5/malyj-xaritonevskij-pereulok-4-moskva.jpg'
    }
]

export const Showcase = () => {
    const searchParams = useSearchParams();
    const selectedFilter = searchParams.get('tours');
    // console.log(selectedFilter); 
    // с помощью selectedFilter собираюсь делать запрос на бек за списком карточек

    return (
        <section>
            <h1 className={styles.title}>ЛИТЕРАТУРНЫЕ ПРОГУЛКИ</h1>
            <div className={styles.container}>
                <FilterBar/>
                <ul className={styles.cardsZone} >
                    {MockData.map((eventCard) => {
                        return( 
                            <li key={MockData.indexOf(eventCard)}>
                                <Card 
                                location={eventCard.location}
                                picture={eventCard.picture} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}