import React from 'react';
import { List, ListRowProps } from 'react-virtualized';
import styled from 'styled-components';

import CommentItem from './CommentItem';

import { Comment } from '../../../models';

const StyledList = styled(List)`
  list-style: none;
  max-width: 1270px;
  padding: 0;
  margin: 24px auto;
  outline: none;
`;

interface Props {
  comments: Comment[];
}

const CommentsList = ({ comments }: Props) => {
  const rowRenderer = ({ key, index, style }: ListRowProps) => (
    <div style={style} key={key}>
      <CommentItem {...comments[index]} />
    </div>
  );

  return (
    <StyledList
      width={1200}
      height={650}
      rowCount={comments.length}
      rowHeight={155}
      rowRenderer={rowRenderer}
      overscanRowCount={3}
    />
  );
};

export default CommentsList;
