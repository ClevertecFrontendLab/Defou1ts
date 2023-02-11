import { baseUrl } from 'api/cleverland-api';
import cn from 'classnames';
import { Rating } from 'components';

import { ReviewProps } from './review.props';

import styles from './review.module.css';

export const Review = ({ review, className, ...props }: ReviewProps) => {
    const date = review.createdAt
        .toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .slice(0, -2);

    return (
        <div className={cn(styles.review, className)} {...props}>
            <img src={baseUrl + review.user.avatarUrl} alt='review author' className={styles.icon} />
            <p className={cn(styles.text, styles.name)}>
                {review.user.firstName} {review.user.lastName}
            </p>
            <p className={cn(styles.text, styles.date)}>{date}</p>
            <Rating className={styles.rating} rating={review.rating} />
            <p className={cn(styles.text, styles.content)}>{review.text}</p>
        </div>
    );
};
