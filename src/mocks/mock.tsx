/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line import/first, padding-line-between-statements
import { ReactComponent as UserIcon } from 'assets/icons/userIcon.svg';

export interface User {
    name: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}

export const user: User = {
    name: 'Иван',
    icon: UserIcon,
};

export interface BookCategory {
    name: string;
    label: string;
    count: number;
}

export const booksCategories: BookCategory[] = [
    {
        name: 'business',
        label: 'Бизнес-книги',
        count: 14,
    },
    {
        name: 'detective',
        label: 'Детективы',
        count: 8,
    },
    {
        name: 'child',
        label: 'Детские книги',
        count: 14,
    },
    {
        name: 'abroad',
        label: 'Зарубежная литература',
        count: 2,
    },
    {
        name: 'history',
        label: 'История',
        count: 5,
    },
    {
        name: 'classic',
        label: 'Классическая литература',
        count: 12,
    },
    {
        name: 'psychology',
        label: 'Книги по психологии',
        count: 11,
    },
    {
        name: 'computer',
        label: 'Компьютерная литература',
        count: 54,
    },
    {
        name: 'culture',
        label: 'Культура и искусство',
        count: 5,
    },
    {
        name: 'sceince',
        label: 'Наука и образование',
        count: 2,
    },
    {
        name: 'public',
        label: 'Публицистическая литераутра',
        count: 54,
    },
    {
        name: 'manual',
        label: 'Справочники',
        count: 10,
    },
    {
        name: 'fantasy',
        label: 'Фантастика',
        count: 12,
    },
    {
        name: 'humor',
        label: 'Юмористическая литература',
        count: 8,
    },
];
