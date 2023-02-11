/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface SidebarState {
    isOpenedMenu: boolean;
    isOpenedSidebar: boolean;
}

const initialState: SidebarState = {
    isOpenedMenu: true,
    isOpenedSidebar: false,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setIsOpenedMenu: (state, action) => {
            state.isOpenedMenu = action.payload;
        },
        setIsOpenedSidebar: (state, action) => {
            state.isOpenedSidebar = action.payload;
        },
    },
});

export const { setIsOpenedMenu, setIsOpenedSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
