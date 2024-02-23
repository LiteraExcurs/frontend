'use client'

import Image from 'next/image'
import styles from './footer.module.scss'
import darkLogo from '../../../public/images/LiteraEx_logo_black 1.svg'
import Link from 'next/link'
import { InputField } from '@/ui/input-field/input-field'
import { Button } from '@/ui/button'
import { ButtonType } from '@/ui/button/types'
import {ChangeEvent, FormEvent} from 'react'

export const Footer = () => {
    const handleForm = (e: FormEvent) => {
        e.preventDefault();
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {}
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
                    <form onSubmit={handleForm} className={styles.subsBar}>
                        <InputField type='subscribe'  name="subscribe" value={""} onChange={onChange}/>
                        <Button 
                        buttonType={ButtonType.Subscribe}
                        label='Подписаться'/>
                    </form>
                </div>
        </footer>
    )
}