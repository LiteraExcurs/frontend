import styles from './round-button.module.scss'

type RoundButtonProps = {
    text: string;
    email?: boolean;
}

export const RoundButton = ({ text, email}:RoundButtonProps) => {
    const buttonStyle = email ? styles.email : styles.default;
    
    return (
        <button className={buttonStyle}>{text}</button>
    )
}