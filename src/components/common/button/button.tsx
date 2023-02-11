import { ReactComponent as ArrowIcon } from 'assets/icons/chevron/arrowRight.svg';
import cn from 'classnames';
import { Text } from 'components';

import { ButtonProps } from './button.props';

import styles from './button.module.css';

export const Button = ({ size = 'l', type, disabled = false, className, children, ...props }: ButtonProps) => (
    <button
        type='button'
        className={cn(
            styles.button,
            styles[size],
            styles[type],
            {
                [styles.disabled]: disabled,
            },
            className
        )}
        {...props}
    >
        <Text size={type === 'text' ? 's' : size} type='button'>
            {children}
        </Text>
        {type === 'text' ? <ArrowIcon className={styles.arrow} /> : null}
    </button>
);
