import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as BlankCat } from 'assets/icons/blankCat.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/chevron/arrowDown.svg';
import cn from 'classnames';
import { BookSlider, Button, Htag, Rating, Review } from 'components';
import { motion } from 'framer-motion';
import { mockedBooks } from 'mocks/mock';

import styles from './book.module.css';

export const BookPage = () => {
    const { category, bookId } = useParams();

    const [isOpenedReviews, setIsOpenedReviews] = useState<boolean>(false);

    const book = mockedBooks.filter((b) => b.id === bookId)[0];
    const thruncatedRating = Math.trunc(book.rating ?? 0);

    // eslint-disable-next-line no-negated-condition
    const renderedImage = !book.posters ? (
        <div className={cn(styles.image, styles.blank, styles.once)}>
            <BlankCat />
        </div>
    ) : book.posters.length === 1 ? (
        <div className={cn(styles.image, styles.once)}>
            <img src={book.posters[0]} alt='Boook' />
        </div>
    ) : (
        <div className={styles.image}>
            <BookSlider posters={book.posters} />
        </div>
    );

    return (
        <section className='book-page'>
            <div className={styles.bookInfo}>
                {renderedImage}
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>
                    {book.author}, {book.addInfo.year}
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
                    {book.addInfo.publisher}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Год издания</p>
                    {book.addInfo.year}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Страниц</p>
                    {book.addInfo.pages}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Переплёт</p>
                    {book.addInfo.binding}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Формат</p>
                    {book.addInfo.format}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Жанр</p>
                    {book.addInfo.genre}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Вес</p>
                    {book.addInfo.weight}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>ISBN</p>
                    {book.addInfo.ISBN}
                </li>
                <li className={styles.addInfoItem}>
                    <p className={styles.addInfoType}>Изготовитель</p>
                    {book.addInfo.producer}
                </li>
            </ul>
            {book.reviews.length && (
                <React.Fragment>
                    <h5 className={styles.subtitle}>Отзывы</h5>{' '}
                    <span className={styles.reviewsCount}>{book.reviews.length}</span>
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
                                {book.reviews.map((review) => (
                                    <Review key={review.id} review={review} />
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
