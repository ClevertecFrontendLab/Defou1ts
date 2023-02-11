import React, { ReactNode } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    type: 'body' | 'subtitle' | 'info' | 'button';
    size: 's' | 'l';
}
