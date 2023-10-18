"use client"
import { useEffect, useState } from 'react';
import styles from './filter-bar.module.scss'
import { useRouter } from 'next/navigation';
import { Button } from '@/ui/button';
import { ButtonType, Location } from '@/ui/button/types';


export const FilterBar = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const router = useRouter();
    

    const handleClickAll = () => {
        setSelectedFilter('all');
    };

    const handleClickMoscow = () => {
        setSelectedFilter('moscow');
    };

    const handleClickOthers = () => {
        setSelectedFilter('from-moscow');
    };

    useEffect(()=> {
        router.push(`?tours=${selectedFilter}`, { scroll: false} )

    }, [selectedFilter, router])

    return(
        <div className={styles.filter}>
            <Button
            buttonType={ButtonType.Filter}
            label='Ближайшие прогулки'
            onClick={handleClickAll}
             />
             <Button
            buttonType={ButtonType.Filter}
            location={Location.Capital}
            label='По Москве'
            onClick={handleClickMoscow}
             />
             <Button
            buttonType={ButtonType.Filter}
            location={Location.Region}
            label='Из Москвы'
            onClick={handleClickOthers}
             />
        </div>
    )
}