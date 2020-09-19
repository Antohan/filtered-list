import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Jumbotron from '../app/components/Jumbotron';
import Toolbar from '../app/components/Toolbar';
import CommentsList from '../app/features/comments/CommentsList';
import { GlobalStyle, StyledContainer, } from '../theme';
import { commentSelector, fetchComments } from '../store/commentsSlice';
import useQuery from '../utils/hooks/useQuery';

function App() {
  const query = useQuery();
  const dispatch = useDispatch();
  const { comments, loading, hasError } = useSelector(commentSelector);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const filteredComments = () => {
    const search = query.get('search') || '';
    const domains = query.getAll('domain');
    const hasDomains = domains.length > 0;
    
    return comments
      .filter(comment => comment.name.includes(search.toLowerCase()))
      .filter(comment => !hasDomains || domains.some(domain => comment.email.endsWith(domain)));
  }

  const renderCommetns = () => {
    if (loading) {
      return <p>Loading comments...</p>
    }
    if (hasError) {
      return <p>Cannot display comments...</p>
    }

    return <CommentsList comments={filteredComments()} />
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
