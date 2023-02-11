import { Outlet } from 'react-router-dom';
import { useMobile } from 'hooks';

import { Sidebar } from './sidebar/sidebar';

import styles from './layout-main-page.module.css';

export const LayoutMainPage = () => {
    const { isMobile } = useMobile();

    return (
        <div className={styles.layout}>
            {!isMobile && <Sidebar className={styles.sidebar} />}
            <Outlet />
        </div>
    );
};
