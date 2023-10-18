'use client'

import Link from "next/link"
import logo from '../../../public/images/LiteraEx_logo_color 2.svg'
import Image from "next/image"
import { HeaderBar } from "../header-bar/header-bar"
import styles from "./header.module.scss"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type HeaderType = 'default' | 'city';
type cityIdType = string | undefined;

export const Header = () => {
  const path = usePathname();
  const [headerType, setHeaderType] = useState<HeaderType>('default');
  const [cityId, setSityId] = useState<cityIdType>(undefined);

  useEffect(()=>{
    // Это не конечный вариант, это идея, как можно отображать название города в хедере
    if(path.includes('/tour')) {
      setHeaderType('city');
      setSityId(path.slice(6));
    }
  },[path]);
    return(
        <header className={styles.header}>
          <Link href='/'><Image className={styles.icon} src={logo} alt='Логотип компании'/></Link>
          <div className={styles.infoContainer}>
            <ul className={styles.navBar}>
                <li><Link className={styles.navLink} href='/'>На главную</Link></li>
                <li><Link className={styles.navLink} href='/'>Литературные прогулки</Link></li>
                <li><Link className={styles.navLink} href='/'>Литературный календарь</Link></li>
                <li><Link className={styles.navLink} href='/'>Отзывы</Link></li>
                <li><Link className={styles.navLink} href='/'>Контакты</Link></li>
            </ul>
            <HeaderBar id={cityId} type={headerType}/>
          </div>
        </header>
    )
}