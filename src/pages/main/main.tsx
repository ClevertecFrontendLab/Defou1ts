import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookMany, View } from '@types';
import { useGetBooksQuery } from 'api/cleverland-api';
import { Card, Search, Sort, ViewType } from 'components';

import styles from './main.module.css';

export const MainPage = () => {
    const [viewType, setViewType] = useState<View>('list');

    const { data: books, isFetching, isLoading, isError } = useGetBooksQuery();

    const { category } = useParams();

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (!books) {
        return <p>Loading</p>;
    }

    return (
        <section className={styles.main}>
            <Search className={styles.search} placeholder='Поиск книги или автора…' />
            <Sort className={styles.sort} />
            <ViewType
                className={styles.viewTile}
                data-test-id='button-menu-view-window'
                onClick={() => setViewType('tile')}
                type='tile'
                active={viewType === 'tile'}
            />
            <ViewType
                className={styles.viewList}
                data-test-id='button-menu-view-list'
                onClick={() => setViewType('list')}
                type='list'
                active={viewType === 'list'}
            />

            <div className={styles[viewType]}>
                {books.map((book: BookMany) => (
                    <Card key={book.id} viewType={viewType} book={book} />
                ))}
            </div>
        </section>
    );
};
