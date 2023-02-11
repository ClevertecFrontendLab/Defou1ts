import React from 'react';
import { Comment } from '@types';

export interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
    review: Comment;
}
