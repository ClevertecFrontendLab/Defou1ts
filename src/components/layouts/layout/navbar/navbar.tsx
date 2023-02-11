import { useParams } from 'react-router-dom';
import { ReactComponent as DividerIcon } from 'assets/icons/chevron/divider.svg';
import cn from 'classnames';
import { Text } from 'components';
import { booksCategories } from 'mocks/mock';

import { NavBarProps } from './navbar.props';

import styles from './navbar.module.css';

export const NavBar = ({ className, ...props }: NavBarProps) => {
    const { category, bookId } = useParams();

    const bookTitle = 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих';

    const renderedCategory =
        category === 'all' ? 'Все' : booksCategories.filter((bookCategory) => bookCategory.name === category)[0].label;

    return (
        <div className={cn(styles.navBar, className)} {...props}>
            <Text type='body' size='s' className={styles.text}>
                {renderedCategory} <DividerIcon className={styles.divider} /> {bookTitle}
            </Text>
        </div>
    );
};
