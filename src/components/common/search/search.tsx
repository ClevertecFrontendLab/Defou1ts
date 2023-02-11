import { useState } from 'react';
import cn from 'classnames';
import { useMobile } from 'hooks';

import { ReactComponent as CloseIcon } from '../../../assets/icons/action/close.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/action/search.svg';

import { SearchProps } from './search.prop';

import styles from './search.module.css';

export const Search = ({ placeholder, className, ...props }: SearchProps) => {
    const { isSmallMobile } = useMobile();

    const [isOpened, setIsOpened] = useState<boolean>(!isSmallMobile);
    const [text, setText] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleClose = () => {
        setText('');
        if (isSmallMobile) setIsOpened(false);
    };

    return (
        <div
            className={cn(
                styles.wrapper,
                {
                    [styles.isOpened]: isOpened,
                    [styles.focus]: isFocused,
                },
                className
            )}
            {...props}
        >
            {isSmallMobile && isOpened ? null : (
                <SearchIcon
                    data-test-id='button-search-open'
                    className={cn(styles.search)}
                    onClick={() => {
                        if (isSmallMobile) setIsOpened(!isOpened);
                    }}
                />
            )}
            <input
                data-test-id='input-search'
                placeholder={placeholder}
                className={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <CloseIcon data-test-id='button-search-close' onClick={handleClose} className={styles.close} />
        </div>
    );
};
