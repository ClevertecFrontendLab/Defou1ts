import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hostUrl, useGetBookQuery } from 'api/cleverland-api';
import { ReactComponent as BlankCat } from 'assets/icons/blankCat.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/chevron/arrowDown.svg';
import cn from 'classnames';
import { BookSlider, Button, Htag, Rating, Review } from 'components';

import styles from './book.module.css';

export const BookPage = () => {
    const { category, bookId } = useParams();

    const [isOpenedReviews, setIsOpenedReviews] = useState<boolean>(false);

    const { data: book, isFetching, isLoading, isError } = useGetBookQuery(bookId as string);

    const thruncatedRating = Math.trunc(book?.rating ?? 0);

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (!book) {
        return <p>Loading</p>;
    }

    // eslint-disable-next-line no-negated-condition
    const renderedImage = !book.images ? (
        <div className={cn(styles.image, styles.blank, styles.once)}>
            <BlankCat />
        </div>
    ) : book.images.length === 1 ? (
        <div className={cn(styles.image, styles.once)}>
            <img src={hostUrl + book.images[0].url} alt='Boook' />
        </div>
    ) : (
        <div className={styles.image}>
            <BookSlider images={book.images} />
        </div>
    );

    return (
        <section className='book-page'>
            <div className={styles.bookInfo}>
                {renderedImage}
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>
                    {book.authors}, {book.issueYear}
                </p>
                <Button className={styles.button} type='primary' size='l'>
                    Забронировать
                </Button>
                <h5 className={styles.titleAbout}>О книге</h5>
                <p className={styles.description}>{book.description}</p>
            </div>
            <h5 className={styles.subtitle}>Рейтинг</h5>
            <hr className={styles.hr} />
            <div className={styles.ratingWrapper}>
                <Rating rating={thruncatedRating} /> <Htag tag='h5'>{book.rating}</Htag>
            </div>
            <h5 className={styles.subtitle}>Подробная информация</h5>
            <hr className={styles.hr} />
            <ul className={styles.addInfo}>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Издательство</p>
                    {book.publish}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Год издания</p>
                    {book.issueYear}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Страниц</p>
                    {book.pages}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Переплёт</p>
                    {book.cover}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Формат</p>
                    {book.format}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Жанр</p>
                    {book.categories}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Вес</p>
                    {book.weight}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>ISBN</p>
                    {book.ISBN}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Изготовитель</p>
                    {book.producer}
                </li>
            </ul>
            {book.comments?.length && (
                <React.Fragment>
                    <h5 className={styles.subtitle}>Отзывы</h5>{' '}
                    <span className={styles.reviewsCount}>{book.comments.length}</span>
                    <ArrowDown
                        data-test-id='button-hide-reviews'
                        onClick={() => setIsOpenedReviews(!isOpenedReviews)}
                        className={cn(styles.arrowDown, {
                            [styles.active]: isOpenedReviews,
                        })}
                    />
                    {isOpenedReviews && (
                        <React.Fragment>
                            <hr className={styles.hr} />

                            <div className={styles.reviews}>
                                {book.comments.map((comment) => (
                                    <Review key={comment.id} review={comment} />
                                ))}
                            </div>
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
            <Button data-test-id='button-rating' type='primary' size='l' className={styles.reviewButton}>
                оценить книгу
            </Button>
        </section>
    );
};
