import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './divider.module.css';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  className?: string;
}

export const Divider = ({ className, ...props }: DividerProps) => {
  return <hr className={clsx(classes['ds-divider'], className)} {...props} />;
};
