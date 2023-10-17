"use client"
import { useEffect, useState } from 'react';
import styles from './filter-bar.module.scss'
import { useRouter } from 'next/navigation';


export const FilterBar = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const router = useRouter();
    

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        setSelectedFilter((e.target as HTMLButtonElement).value);
    }

    useEffect(()=> {
        router.push(`?tours=${selectedFilter}`, { scroll: false} )

    }, [selectedFilter, router])

    return(
        <div className={styles.filter}>
            <button value='all' onClick={(e) => handleClick(e)}>Ближайшие</button>
            <button value='moscow' onClick={(e) => handleClick(e)}>По Москве</button>
            <button value='from-moscow' onClick={(e) => handleClick(e)}>Из Москвы</button>
        </div>
    )
}