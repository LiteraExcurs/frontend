import { FilterBar } from '../filter-bar/filter-bar'
import styles from './showcase.module.scss'

export const Showcase = () => {
    return (
        <section>
            <h1 className={styles.title}>ЛИТЕРАТУРНЫЕ ПРОГУЛКИ</h1>
            <div className={styles.container}>
                <FilterBar/>
                <div></div>
            </div>
        </section>
    )
}