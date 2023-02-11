import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as AscendingIcon } from '../../../assets/icons/action/ascending.svg';
import { ReactComponent as DescendingIcon } from '../../../assets/icons/action/descending.svg';
import { Text } from '../text/text';

import { SortProps } from './sort.props';

import styles from './sort.module.css';

export const Sort = ({ className, ...props }: SortProps) => {
    const [sortType, setSortType] = useState<'ascending' | 'descending'>('ascending');

    const Icon = sortType === 'ascending' ? AscendingIcon : DescendingIcon;

    const onToggleSortType = () => {
        if (sortType === 'ascending') {
            setSortType('descending');
        } else {
            setSortType('ascending');
        }
    };

    return (
        <button onClick={onToggleSortType} type='button' className={cn(styles.wrapper, className)} {...props}>
            <Icon className={styles.icon} />
            <Text type='body' size='s' className={styles.text}>
                По рейтингу
            </Text>
        </button>
    );
};
