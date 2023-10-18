import Link from 'next/link'
import styles from './card.module.scss'
import Image from 'next/image'

type CardProps = {
    location: string,
    picture: string,
}

export const Card = ({location, picture}:CardProps) => {
    return (
        <Link href='/' className={styles.card}>
            {/* когда появятся картинки на беке, заменю img на <Image /> */}
            <img className={styles.image} src={picture} alt='обложка экскурсии'/>
            <button className={styles.button}>{location}</button>
        </Link>
    )
}