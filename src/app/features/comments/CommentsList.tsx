import React from 'react';

import CommentItem from './Comment';
import { StyledList } from '../../../theme';
import { Comment } from '../../../models';


interface Props {
  comments: Comment[];
}

const CommentsList = ({ comments }: Props) => {
  return (
    <StyledList>
      {comments.map(comment => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </StyledList>
  );
};

export default CommentsList;