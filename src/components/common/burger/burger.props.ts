import React from 'react';

export interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpened: boolean;
    onClick: () => void;
}
