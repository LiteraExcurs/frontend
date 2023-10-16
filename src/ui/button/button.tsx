'use client';

import Image from 'next/image';
import {
  useState,
  useLayoutEffect,
  useRef,
  type ButtonHTMLAttributes,
} from 'react';

import type { ButtonColor, ButtonType } from './types';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  label: string;
  text?: string;
  backgroundColor?: ButtonColor;
  signPic?: string;
  onClick?: () => void;
}

export const Button = ({
  buttonType,
  label,
  text,
  backgroundColor,
  signPic,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonLabelRef = useRef<HTMLSpanElement>(null);

  const [labelState, setLableState] = useState(label);
  const [longLabel, setLongLabel] = useState(false);

  useLayoutEffect(() => {
    const cssBoxHeight = 16; // borders and paddings

    if (buttonRef.current && buttonLabelRef.current) {
      const buttonHeight = buttonRef.current.offsetHeight - cssBoxHeight;
      const labelHeight = buttonLabelRef.current.offsetHeight;

      if (labelHeight > buttonHeight) {
        setLongLabel(true);
        setLableState((prev) => prev.slice(0, labelState.length - 1));
      } else {
        if (longLabel) {
          setLableState((prev) => `${prev.slice(0, labelState.length - 2)}...`);
          setLongLabel(prev => !prev);
        }
      }
    }
  }, [labelState, longLabel]);

  return (
    <button
      ref={buttonRef}
      type={buttonType === 'subscribe' ? 'submit' : 'button'}
      onClick={onClick ? onClick : undefined}
      className={`
        ${styles.button}
        ${styles[`button__type_${buttonType}`]}
        ${
          backgroundColor ? styles[`button__background_${backgroundColor}`] : ''
        }
      `}
      {...props}
    >
      <span ref={buttonLabelRef}>{labelState}</span>
      {text && text?.length > 0 ? (
        <span className={styles['button__text']}>{text}</span>
      ) : null}
      {signPic && buttonType === 'filter' && (
        <Image
          src={signPic}
          width={240}
          height={45}
          alt={label}
          className={styles['button__sign']}
        />
      )}
    </button>
  );
};
