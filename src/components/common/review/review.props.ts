import React from 'react';
import { Review } from '@types';

export interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
    review: Review;
}
