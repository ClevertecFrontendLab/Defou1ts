import cn from 'classnames';

import { ReactComponent as ListIcon } from '../../../assets/icons/action/list.svg';
import { ReactComponent as TileIcon } from '../../../assets/icons/action/tile.svg';

import { ViewTypeProps } from './view-type.props';

import styles from './view-type.module.css';

export const ViewType = ({ type, active, className, ...props }: ViewTypeProps) => {
    const Icon = type === 'tile' ? TileIcon : ListIcon;

    return (
        <div
            className={cn(
                styles.wrapper,
                {
                    [styles.active]: active,
                },
                className
            )}
            {...props}
        >
            <Icon className={styles.icon} />
        </div>
    );
};
