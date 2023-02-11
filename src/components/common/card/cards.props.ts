import React from 'react';
import { Book, View } from 'types';

export interface CardProps {
    viewType: View;
    book: Book;
    className?: string;
}
