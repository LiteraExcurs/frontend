import { SearchField } from "@/ui/search-field/search-field"
import Image from "next/image"
import Link from "next/link"
import phoneIcon from '../../images/phone_14402 1.svg'
import styles from './header-bar.module.scss'

export const HeaderBar = () => {
    return (
        <div className={styles.container}>
            <SearchField />
            <ul className={styles.iconZone}>
              <li><Link href='/'><Image src={phoneIcon} alt='Иконка телефона'/>
                <p>Заказать звонок</p></Link></li>
              <li><Link href='/'><Image src={phoneIcon} alt='Иконка телефона'/>
                <p>Заказать звонок</p></Link></li>
              <li><Link href='/'><Image src={phoneIcon} alt='Иконка телефона'/>
                <p>Заказать звонок</p></Link></li>
              <li><Link href='/'><Image src={phoneIcon} alt='Иконка телефона'/>
                <p>Заказать звонок</p></Link></li>
            </ul>
        </div>
    )
}