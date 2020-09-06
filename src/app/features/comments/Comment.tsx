import React from 'react';

import {
  StyledCard,
  StyledCardTitle,
  StyledCardSubhead,
  StyledCardText
} from '../../../theme';
import { Comment } from '../../../models';


const CommentItem = ({ name, email, body }: Comment) => (
  <StyledCard>
    <StyledCardTitle>{name}</StyledCardTitle>
    <StyledCardSubhead>{email}</StyledCardSubhead>
    <StyledCardText>{body}</StyledCardText>
  </StyledCard>
);

export default CommentItem;
