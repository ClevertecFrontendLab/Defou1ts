import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  mobile?: boolean;
}
