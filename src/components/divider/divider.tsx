import clsx from 'clsx';
import classes from './divider.module.css';

export const Divider = () => {
  return <hr className={clsx(classes['ds-divider'])} />;
};
