// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { TextProps } from './text.props';

import styles from './text.module.css';

export const Text = ({ type, size, className, children, ...props }: TextProps) => (
  <p className={cn(className, styles[type], styles[size])} {...props}>
    {children}
  </p>
);
