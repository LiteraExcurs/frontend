import styles from './not-found.module.scss';
import Link from "next/link";
export default function Custom404() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h3 className={styles.header}>СТРАНИЦА НЕ НАЙДЕНА</h3>
                <p className={styles.text}>
                    Страница, на которую вы пытаетесь попасть не существует, или была удалена.
                    Перейдите на <Link href={"/"}/>
                </p>
            </div>
        </div>
    )
}