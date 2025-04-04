import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'div'> {
  content: string;
  variant?: 'default' | 'success' | 'danger';
  className?: string;
}

export const Chip = ({
  content,
  variant = 'default',
  className,
  ...props
}: ChipProps) => {
  const styles = clsx(classes['ds-chip'], classes[variant], className);

  return (
    <div className={styles} {...props}>
      {content}
    </div>
  );
};
