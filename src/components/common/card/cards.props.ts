import { BookMany, View } from 'types';

export interface CardProps {
    viewType: View;
    book: BookMany;
    className?: string;
}
