import React, { ReactNode } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: 's' | 'l';
    type: 'primary' | 'secondary' | 'text';
    children: ReactNode;
	disabled?:boolean;
}
