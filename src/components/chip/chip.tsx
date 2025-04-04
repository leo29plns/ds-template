import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
  label: string
  variant?: 'default' | 'success' | 'danger';
  className?: string;
}

export const Chip = ({
  label,
  variant = 'default',
  className,
  ...props
}: ChipProps) => {
  const styles = clsx(classes['ds-chip'], classes[`ds-chip--${variant}`], className);

  return (
    <span className={styles} {...props}>
      {label}
    </span>
  );
};
