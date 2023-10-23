import styles from './input-field.module.scss'
import searchIcon from '../../../public/images/Vector.svg'
import Image from 'next/image'

type InputType = {
  type: 'search' | 'subscribe',
}

export const InputField = ({ type }: InputType) => {

    return (
      type === 'search'
        ? (<div className={styles.searchZone}>
          <input
          className={styles.inputSearch}
          placeholder='Поиск'>
          </input>
          <button className={styles.iconButton}><Image className={styles.icon} src={searchIcon} alt="Изображение лупы"/></button>
        </div>)
      : <input
        className={styles.inputSubs}
        placeholder='e-mail@example.com'>
        </input>
        
    )
}