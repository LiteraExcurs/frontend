import { ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './overlay';

import styles from './modal.module.scss';

type ModalProps = {
  title: string;
  children: ReactElement;
  closeFn: () => void;
};

export const Modal = ({ title, children, closeFn }: ModalProps) => {
  const [_, setState] = useState(false);
  let targetEl: HTMLElement | null = document.getElementById('modals');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useLayoutEffect(() => {
    if (targetEl === null) {
      targetEl = document.getElementById('modals');
      setState((prev) => !prev);
    }
  }, [targetEl]);

  return (
    <>
      {targetEl !== null &&
        createPortal(
          <div className={styles.modal}>
            <Overlay onClick={closeFn} />
            <div className={styles.container}>
              <button
                onClick={closeFn}
                className={styles.closeBtn}
                title="Закрыть окно"
              ></button>
              <h1 className={styles.headline}>{title}</h1>
              <div className={styles.elements}>{children}</div>
            </div>
          </div>,
          targetEl
        )}
    </>
  );
};
