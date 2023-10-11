import type { ButtonHTMLAttributes } from 'react';
import type { ButtonColor } from './types';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: ButtonColor;
  shadow?: boolean;
  size?: 's' | 'm' | 'l' | 'xl';
  onClick?: () => void;
}

export const Button = ({
  text,
  color = 'orangered',
  shadow = false,
  size = 'm',
  onClick,
}: ButtonProps) => {
  return (
    <input
      type="button"
      value={text}
      className={`
        ${styles.button}
        ${styles[`button__color_${color}`]}
        ${shadow ? 'button__shadow_on' : ''}
        ${styles[`button__size_${size}`]}
      `}
    />
  );
};
