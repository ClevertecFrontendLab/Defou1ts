import React from 'react';

export type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

export interface AddInfo {
    publisher: string;
    year: number;
    pages: number;
    binding: string;
    format: string;
    genre: string;
    weight: number;
    ISBN: string;
    producer: string;
}

export interface Review {
    id: string;
    name: string;
    surname: string;
    date: Date;
    icon: string;
    rating: number;
    content?: string;
}

export interface Book {
    posters?: string[];
    title: string;
    author: string;
    booked?: boolean;
    bookEnd?: Date;
    description: string;
    rating?: number;
    addInfo: AddInfo;
    reviews: Review[];
    id: string;
}
