import React from 'react';
import { View } from 'types';

export interface ViewTypeProps extends React.HTMLAttributes<HTMLDivElement> {
    type: View;
    active: boolean;
}
