import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import cn from 'classnames';

import { RatingProps } from './rating.props';

import styles from './rating.module.css';

export const Rating = forwardRef(
    (
        { isEditable = false, rating, setRating, tabIndex, error, className, ...props }: RatingProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
            new Array(5).fill(<React.Fragment> </React.Fragment>)
        );
        const ratingArrayRef = useRef<Array<HTMLSpanElement | null>>([]);

        const computeFocus = (r: number, i: number): number => {
            if (!isEditable) {
                return tabIndex ?? -1;
            }
            if (!rating && i === 0) {
                return tabIndex ?? 0;
            }
            if (rating === i + 1) {
                return tabIndex ?? 0;
            }

            return tabIndex ?? -1;
        };

        const changeDisplay = (i: number) => {
            if (!isEditable) return;
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            constructRating(i);
        };

        const onClick = (i: number) => {
            if (!isEditable || !setRating) return;
            setRating(i);
        };

        const handleKey = (i: number, e: KeyboardEvent) => {
            if (!isEditable || !setRating) {
                return;
            }
            if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
                // eslint-disable-next-line no-negated-condition
                if (!rating) {
                    setRating(1);
                } else {
                    e.preventDefault();
                    setRating(rating < 5 ? rating + 1 : 5);
                }
                ratingArrayRef.current[rating]?.focus();
            }
            if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
                e.preventDefault();
                setRating(rating > 1 ? rating - 1 : 1);
                ratingArrayRef.current[rating - 2]?.focus();
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const constructRating = (currentRating: number) => {
            const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    className={cn(styles.star, {
                        [styles.editable]: isEditable,
                        [styles.filled]: i < currentRating,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    tabIndex={computeFocus(rating, i)}
                    onKeyDown={(e: KeyboardEvent) => handleKey(i, e)}
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    ref={(r) => ratingArrayRef.current?.push(r)}
                >
                    <StarIcon />
                </span>
            ));

            setRatingArray(updatedArray);
        };

        useEffect(() => {
            constructRating(rating);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [rating, tabIndex]);

        return (
            <div
                ref={ref}
                className={cn(
                    styles.ratingWrapper,
                    {
                        [styles.error]: error,
                    },
                    className
                )}
                {...props}
            >
                {ratingArray.map((r, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={i}>{r}</span>
                ))}
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);
