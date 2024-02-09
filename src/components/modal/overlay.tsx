import styles from './overlay.module.scss';

type OverlayProps = {
  onClick: () => void;
}

export const Overlay = ({ onClick }: OverlayProps) => {
  return <div onClick={onClick} className={styles.overlay}></div>;
};
