import styles from './search-field.module.scss'
import searchIcon from '../../../public/images/Vector.svg'
import Image from 'next/image'

export const SearchField = () => {
    return (
        <div className={styles.inputZone}>
          <input
          className={styles.input}
          placeholder="Поиск">
          </input>
          <button className={styles.iconButton}><Image className={styles.icon} src={searchIcon} alt="Изображение лупы"/></button>
        </div>
        
    )
}