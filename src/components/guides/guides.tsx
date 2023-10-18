import Image from 'next/image'
import styles from './guides.module.scss'
import bigLogo from '../../../public/images/LiteraEx_sign_black 3.svg'

export const Guides = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>НАШИ РАССКАЗЧИЦЫ</h2>
            <Image className={styles.backgroundLogo} src={bigLogo} alt="Полупрозрачное изображение логотипа на фоне страницы"/>
            <article className={styles.article}>
                <div className={styles.column}>
                    <h4 className={styles.columnName}>Решетникова Дарья Юрьевна</h4>
                    <p className={styles.columnText}>Аккредитованный гид-экскурсовод. Сотрудник 
                        Государственного музея истории Российской 
                        литературы имени В.И. Даля. Хранитель</p>
                </div>
                {/* когда появятся картинки на беке, заменю img на <Image /> */}
                <img className={styles.image} src='https://thumb.tildacdn.com/tild6538-6430-4236-a338-366632643934/-/resize/648x/-/format/webp/IMG_5460_1.jpg' alt="Фотография Дарьи Решетниковой"/>
            </article>
            <article className={styles.article}>
                <div className={styles.column}>
                    <h4 className={styles.columnName}>Нестерова Жанна Константиновна</h4>
                    <p className={styles.columnText}>Историк, археолог, фотограф. Закончила 
                        исторический факультет МГГУ им. Шолохова, 
                        Курсы повышения квалификации — Государственный 
                        Музей Востока. Сотрудник Государственного музея 
                        истории Российской литературы имени В.И. Даля.</p>
                </div>
                <img className={styles.image} src='https://thumb.tildacdn.com/tild3432-6335-4632-b331-633036343135/-/resize/668x/-/format/webp/noroot.png' alt="Фотография Жанны Нестеровой"/>
            </article>
        </section>
    )
}