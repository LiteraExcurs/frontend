import { ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './overlay';

import styles from './modal.module.scss';

type ModalProps = {
  title: string;
  children: ReactElement;
  closeFn: () => void;
  subtitle: string;
};

export const Modal = ({ title, subtitle, children, closeFn }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscKeydown);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKeydown);
    };
  }, []);

  const handleEscKeydown = (e: { key: string }) => {
    e.key === 'Escape' && closeFn();
  };

  return (
    <>
      {mounted
        ? createPortal(
            <div className={styles.modal}>
              <Overlay onClick={closeFn} />
              <div className={styles.container}>
                <button
                  onClick={closeFn}
                  className={styles.closeBtn}
                  title="Закрыть окно"
                ></button>
                <h1 className={styles.headline}>{title}</h1>
                <div className={styles.eventTextWrapper}>
                  <p className={styles.span}>На посещение мероприятия:</p>
                  <h2 className={styles.subtitle}>{subtitle}</h2>
                </div>
                <div className={styles.elements}>{children}</div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
