import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import useQuery from '../../utils/hooks/useQuery';
import {
  StyledToolbar,
  StyledContainer,
  StyledLabel,
  StyledInput,
} from '../../theme';


const Toolbar = (props: RouteComponentProps) => {
  const query = useQuery();
  const [search, setSearch] = useState(query.get('search') || '');

  const handleSearchInput = (value: string) => {
    setSearch(value);

    const searchParams = new URLSearchParams();

    if (value) {
      searchParams.set('search', value)
    }

    props.history.push({search: `?${searchParams.toString()}`})
  };

  return (
    <StyledToolbar>
      <StyledContainer maxWidth="1318">
        <StyledLabel>
          <span>Search</span>
          <StyledInput
            type="text"
            placeholder="Enter Name"
            value={search}
            onChange={(event) => handleSearchInput(event.target.value)}
          />
        </StyledLabel>
      </StyledContainer>
    </StyledToolbar>
  );
}

export default withRouter(Toolbar);