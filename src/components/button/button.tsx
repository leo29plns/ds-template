import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outlined';
  className?: string;
}

export const Button = ({
  children,
  variant = 'default',
  className,
  ...props
}: ButtonProps) => {
  const styles = clsx(classes['ds-button'], classes[variant], className);

  return (
    <button className={styles} {...props}>
      {children}
    </button>);
};
