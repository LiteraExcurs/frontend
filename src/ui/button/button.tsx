'use client';

import Image from 'next/image';
import {
  useState,
  useLayoutEffect,
  useRef,
  type ButtonHTMLAttributes,
} from 'react';

import { ButtonType } from './types';
import { Location } from "@/utils/types";
import { composeButtonStyles } from './utils';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  location?: Location;
  label: string;
  text?: string;
  extraClass?: string;
  onClick?: () => void;
}

export const Button = ({
  buttonType,
  location,
  label,
  text,
  extraClass,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonLabelRef = useRef<HTMLSpanElement>(null);

  const [labelState, setLableState] = useState(label);
  const [longLabel, setLongLabel] = useState(false);
  const [buttonSign, setButtonSign] = useState('');

  useLayoutEffect(() => {
    if (buttonType === ButtonType.Filter) {
      if (location === Location.Capital) {
        setButtonSign('/images/moscow-love.svg');
      }
      if (location === Location.Region) {
        setButtonSign('/images/from-moscow.svg');
      }
    } else {
      setButtonSign('');
    }
  }, [buttonType, location]);

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
          setLongLabel((prev) => !prev);
        }
      }
    }
  }, [labelState, longLabel]);

  const buttonStyles = composeButtonStyles(styles, buttonType, location, extraClass);

  return (
    <button
      ref={buttonRef}
      type={
        buttonType === ButtonType.Subscribe || buttonType === ButtonType.Send
          ? 'submit'
          : 'button'
      }
      onClick={onClick ? onClick : undefined}
      className={buttonStyles}
      {...props}
    >
      <span ref={buttonLabelRef}>{labelState}</span>

      {text && text?.length > 0 ? (
        <span className={styles['button__text']}>{text}</span>
      ) : null}

      {buttonSign.length > 0 && (
        <Image
          src={buttonSign}
          width={240}
          height={45}
          alt={label}
          className={styles['button__sign']}
        />
      )}
    </button>
  );
};
