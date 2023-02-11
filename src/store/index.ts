import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cleverlandApi } from 'api/cleverland-api';

import sidebar from './slices/sidebar';

export const store = configureStore({
    reducer: {
        [cleverlandApi.reducerPath]: cleverlandApi.reducer,
        sidebar,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cleverlandApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
