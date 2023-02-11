import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book, View } from '@types';
import { Card, Search, Sort, ViewType } from 'components';
import { mockedBooks } from 'mocks/mock';

import styles from './main.module.css';

export const MainPage = () => {
    const [viewType, setViewType] = useState<View>('list');

    const { category } = useParams();

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
                {mockedBooks.map((book: Book) => (
                    <Card key={book.id} viewType={viewType} book={book} />
                ))}
            </div>
        </section>
    );
};
