import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Jumbotron from '../app/components/Jumbotron';
import Toolbar from '../app/components/Toolbar';
import CommentsList from '../app/features/comments/CommentsList';
import { GlobalStyle, StyledContainer, } from '../theme';
import { commentSelector, fetchComments } from '../store/commentsSlice';


function App() {
  const dispatch = useDispatch();
  const { comments, loading, hasError } = useSelector(commentSelector);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const renderCommetns = () => {
    if (loading) {
      return <p>Loading comments...</p>
    }
    if (hasError) {
      return <p>Cannot display comments...</p>
    }

    return <CommentsList comments={comments} />
  }

  return (
    <div>
      <GlobalStyle/>
      <Jumbotron/>
      <Toolbar/>
      <StyledContainer>
        {renderCommetns()}
      </StyledContainer>
    </div>
  );
}

export default App;
