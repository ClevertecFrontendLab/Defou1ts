import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { BookMany, BookOne } from '@types';

export const hostUrl = 'https://strapi.cleverland.by';
export const baseUrl = `${hostUrl}/api`;

export const cleverlandApi = createApi({
    reducerPath: 'cleverlandApi',
    baseQuery: retry(fetchBaseQuery({ baseUrl }), { maxRetries: 5 }),
    endpoints: (builder) => ({
        getBooks: builder.query<BookMany[], void>({
            query: () => '/books',
        }),
        getBook: builder.query<BookOne, string>({
            query: (bookId) => `/books/${bookId}`,
        }),
    }),
});

export const { useGetBooksQuery, useGetBookQuery } = cleverlandApi;
