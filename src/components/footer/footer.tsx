import Image from 'next/image'
import styles from './footer.module.scss'
import darkLogo from '../../../public/images/LiteraEx_logo_black 1.svg'
import Link from 'next/link'
import { InputField } from '@/ui/input-field/input-field'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Image className={styles.icon} src={darkLogo} alt='Логотип компании'/>
                <ul className={styles.navBar}>
                    <h3 className={styles.navTitle}>Меню</h3>
                    <li><Link className={styles.navLink} href='/'>На главную</Link></li>
                    <li><Link className={styles.navLink} href='/'>Литературные прогулки</Link></li>
                    <li><Link className={styles.navLink} href='/'>Литературный календарь</Link></li>
                    <li><Link className={styles.navLink} href='/'>Отзывы</Link></li>
                    <li><Link className={styles.navLink} href='/'>Контакты</Link></li>
                </ul>
                <ul className={styles.navBar}>
                    <h3 className={styles.navTitle}>Контакты</h3>
                    <li><Link className={styles.navLink} href='/'>+7 (111) 111-11-11</Link></li>
                    <li><Link className={styles.navLink} href='/'>E-mail</Link></li>
                </ul>
                <div>
                    <h3 className={styles.navTitle}>Подписаться на новости</h3>
                    <div className={styles.subsBar}>
                        <InputField type='subscribe' />
                        <button>Подписаться</button>
                    </div>
                </div>
        </footer>
    )
}