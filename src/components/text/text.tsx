import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './text.module.css';

export interface TextProps extends ComponentPropsWithoutRef<'div'> {
  content: string;
  size?: 'm' | 'l' | 'xl';
  className?: string;
}

export const Text = ({
  content,
  size = 'm',
  className,
  ...props
}: TextProps) => {
  const styles = clsx(classes['ds-text'], classes[`ds-text--${size}`], className);

  return (
    <p className={styles} {...props}>
      {content}
    </p>
  );
};
