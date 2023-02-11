/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '@store';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/chevron/arrowDown.svg';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useMobile } from 'hooks';
import { setIsOpenedMenu, setIsOpenedSidebar } from 'store/slices/sidebar';

import { BookCategory, booksCategories } from '../../../../mocks/mock';
import { BOOKS_ROUTE, CONTRACT_PAGE_ROUTE, HOME_PAGE_ROUTE, PROFILE_ROUTE, TERMS_PAGE_ROUTE } from '../../../../utils';
import { Htag } from '../../../common/htag/htag';

import { SidebarProps } from './sidebar.props';

import styles from './sidebar.module.css';

export type MenuType = 'books' | 'terms' | 'contract';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { isMobile } = useMobile();

    const isOpenedMenu = useSelector((state: RootState) => state.sidebar.isOpenedMenu);
    const isOpenedSidebar = useSelector((state: RootState) => state.sidebar.isOpenedSidebar);

    const { category: currentCategory } = useParams();

    const location = useLocation();
    const currentMenu = useMemo(() => location.pathname.split('/')[1], [location.pathname]);

    useEffect(() => {
        dispatch(setIsOpenedSidebar(false));
        if (currentCategory) {
            dispatch(setIsOpenedMenu(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, dispatch]);

    // const variants = {
    //     visible: {
    //         height: 'auto',
    //         transition: {
    //             when: 'beforeChildren',
    //             staggerChildren: 0.02,
    //         },
    //     },
    //     hidden: {
    //         display: 'none',
    //         height: 0,
    //         opacity: 0,
    //     },
    // };

    const variants = {
        visible: {},
        hidden: {
            display: 'none',
        },
    };
    const variantsChildren = {
        visible: {},
        hidden: {
            display: 'none',
        },
    };

    // const variantsChildren = {
    //     visible: {
    //         opacity: 1,
    //         height: 29,
    //     },
    //     hidden: {
    //         display: 'none',
    //         opacity: 0,
    //         height: 0,
    //     },
    // };

    const renderSecondLevelMenu = () =>
        booksCategories.map(({ name, label, count }: BookCategory) => (
            <motion.li variants={variantsChildren} key={name}>
                <NavLink
                    to={`${BOOKS_ROUTE}/${name}`}
                    className={({ isActive }) =>
                        cn(styles.category, {
                            [styles.secondLevelActive]: isActive,
                            [styles.active]: isActive,
                        })
                    }
                >
                    {label}
                </NavLink>{' '}
                <span className={styles.count}>{count}</span>
            </motion.li>
        ));

    const renderedSecondLevelMenu = renderSecondLevelMenu();

    return (
        <nav
            data-test-id='burger-navigation'
            className={cn(className, styles.sidebar, {
                [styles.opened]: isOpenedSidebar,
            })}
            {...props}
        >
            <ul className={styles.firstLevelMenu}>
                <li
                    onClick={() => dispatch(setIsOpenedMenu(!isOpenedMenu))}
                    data-test-id={isMobile ? 'burger-showcase' : 'navigation-showcase'}
                >
                    <span
                        className={cn(styles.firstLevelItem, {
                            [styles.firstLevelActive]: currentMenu === 'books',
                            [styles.active]: currentMenu === 'books',
                        })}
                        // to={HOME_PAGE_ROUTE}
                    >
                        Витрина книг{' '}
                        <ArrowDownIcon
                            className={cn(styles.icon, {
                                [styles.active]: currentMenu === 'books',
                                [styles.isOpened]: isOpenedMenu,
                            })}
                        />
                    </span>
                    <motion.ul
                        variants={variants}
                        initial={isOpenedMenu ? 'visible' : 'hidden'}
                        animate={isOpenedMenu ? 'visible' : 'hidden'}
                        className={styles.secondLevelMenu}
                    >
                        <motion.li variants={variantsChildren} key='all'>
                            <NavLink
                                data-test-id={isMobile ? 'burger-books' : 'navigation-books'}
                                to={`${BOOKS_ROUTE}/all`}
                                className={({ isActive }) =>
                                    cn(styles.category, {
                                        [styles.secondLevelActive]: isActive,
                                        [styles.active]: isActive,
                                    })
                                }
                            >
                                Все книги
                            </NavLink>
                        </motion.li>
                        {renderedSecondLevelMenu}
                    </motion.ul>
                </li>
                <li data-test-id={isMobile ? 'burger-terms' : 'navigation-terms'}>
                    <Link
                        onClick={() => dispatch(setIsOpenedMenu(false))}
                        className={cn(styles.firstLevelItem, {
                            [styles.firstLevelActive]: currentMenu === 'terms',
                            [styles.active]: currentMenu === 'terms',
                        })}
                        to={TERMS_PAGE_ROUTE}
                    >
                        Правила пользования
                    </Link>
                </li>
                <li data-test-id={isMobile ? 'burger-contract' : 'navigation-contract'}>
                    <Link
                        onClick={() => dispatch(setIsOpenedMenu(false))}
                        className={cn(styles.firstLevelItem, {
                            [styles.firstLevelActive]: currentMenu === 'contract',
                            [styles.active]: currentMenu === 'contract',
                        })}
                        to={CONTRACT_PAGE_ROUTE}
                    >
                        Договор оферты
                    </Link>
                </li>
            </ul>
            {isMobile ? (
                <React.Fragment>
                    <hr className={styles.hr} />
                    <ul className={styles.firstLevelMenu}>
                        <li>
                            <Htag
                                tag='h5'
                                className={cn(styles.firstLevelItem, {
                                    [styles.firstLevelActive]: currentMenu === 'profile',
                                })}
                            >
                                <Link to={PROFILE_ROUTE}>Профиль</Link>
                            </Htag>
                        </li>
                        <li>
                            <Htag tag='h5' className={cn(styles.firstLevelItem)}>
                                Выход
                            </Htag>
                        </li>
                    </ul>
                </React.Fragment>
            ) : null}
        </nav>
    );
};
