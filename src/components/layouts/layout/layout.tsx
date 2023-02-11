import { MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '@store';
import cn from 'classnames';
import { Footer, Header, NavBar, Sidebar } from 'components';
import { useMobile } from 'hooks';
import { setIsOpenedMenu, setIsOpenedSidebar } from 'store/slices/sidebar';

import styles from './layout.module.css';

export const Layout = () => {
    const dispatch: AppDispatch = useDispatch();

    const isOpenedSidebar = useSelector((state: RootState) => state.sidebar.isOpenedSidebar);

    const [sidebarContainer, setSidebarContainer] = useState<HTMLElement | null>(document.getElementById('layout'));

    const { bookId } = useParams();
    const { isMobile } = useMobile();

    useEffect(() => {
        setSidebarContainer(document.getElementById('layout'));
    }, [sidebarContainer]);

    const closeSidebar = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const target = e.target as Element;

        if (!target.closest('nav') && isOpenedSidebar) {
            dispatch(setIsOpenedSidebar(false));
            dispatch(setIsOpenedMenu(true));
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
            onClick={(e) => closeSidebar(e)}
            id='layout'
            className={cn(styles.wrapper, {
                [styles.withNavBar]: bookId,
            })}
        >
            <Header className={styles.header} />
            {bookId && <NavBar className={styles.navBar} />}
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer className={styles.footer} />
            {isMobile && sidebarContainer !== null && createPortal(<Sidebar />, sidebarContainer)}
        </div>
    );
};
