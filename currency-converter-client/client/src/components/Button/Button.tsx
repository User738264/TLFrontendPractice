import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
}

export const Button = ({ variant = 'primary', icon, children, className, ...rest }: ButtonProps) => {
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classNames} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};
