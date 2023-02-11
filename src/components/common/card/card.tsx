import { Link, useParams } from 'react-router-dom';
import { baseUrl, hostUrl } from 'api/cleverland-api';
import catIcon from 'assets/icons/cat.png';
import cn from 'classnames';
import { Button, Rating, Text } from 'components';
import { BOOKS_ROUTE } from 'utils';

import { CardProps } from './cards.props';

import styles from './card.module.css';

export const Card = ({ book, viewType, className }: CardProps) => {
    const posterUrl = book.image ? book.image.url : catIcon;
    const thruncatedRating = Math.trunc(book.rating ?? 0);

    const { category } = useParams();

    const renderButton = () => {
        switch (book.booking?.order) {
            case false:
                return (
                    <Button className={styles.button} size='s' type='primary'>
                        <Link to={`${BOOKS_ROUTE}/${category}/${book.id}`}>Забронировать</Link>
                    </Button>
                );
            case true:
                if (book.delivery?.handed) {
                    return (
                        <Button className={styles.button} size='s' type='secondary' disabled={true}>
                            Занято до {book.delivery.dateHandedTo.getDay()}.{book.delivery.dateHandedTo.getMonth()}
                        </Button>
                    );
                }

                return (
                    <Button className={styles.button} size='s' type='secondary'>
                        Забронирована
                    </Button>
                );

            default:
                return (
                    <Button className={styles.button} size='s' type='primary'>
                        <Link to={`${BOOKS_ROUTE}/${category}/${book.id}`}>Забронировать</Link>
                    </Button>
                );
        }
    };

    const CardButton = renderButton();

    return (
        <Link
            to={`${BOOKS_ROUTE}/${category}/${book.id}`}
            data-test-id='card'
            className={cn(
                styles.card,
                {
                    [styles.tile]: viewType === 'tile',
                    [styles.list]: viewType === 'list',
                },
                className
            )}
        >
            <div className={styles.poster}>
                <img
                    alt={book.title}
                    src={hostUrl + posterUrl}
                    className={cn(styles.image, {
                        [styles.blank]: !book.image,
                    })}
                />
            </div>
            {book.rating ? (
                <Rating className={styles.rating} rating={thruncatedRating} isEditable={false} />
            ) : (
                <Text className={styles.rating} type='body' size='s'>
                    ещё нет оценок
                </Text>
            )}
            <p className={styles.title}>{book.title}</p>
            <p className={styles.author}>
                {book.authors}, {book.issueYear}
            </p>
            {CardButton}
        </Link>
    );
};
