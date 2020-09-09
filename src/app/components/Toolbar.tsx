import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

import useQuery from '../../utils/hooks/useQuery';
import {
  StyledToolbar,
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledFlex,
  StyledCaption,
} from '../../theme';


const Toolbar = (props: RouteComponentProps) => {
  const query = useQuery();
  const [search, setSearch] = useState(query.get('search') || '');
  const [domains, setDomains] = useState(query.getAll('domains'));

  const setSearchParams = (searchValue: string, domainsList: string[]) => {
    const searchParams = new URLSearchParams();

    if (searchValue) {
      searchParams.set('search', searchValue)
    }

    if (domainsList && domainsList.length) {
      for (const domain of domainsList) {
        searchParams.append('domain', domain);
      }
    }

    props.history.push({search: `?${searchParams.toString()}`});
  }

  const handleSearchInput = (value: string) => {
    setSearch(value);
    setSearchParams(value, domains);
  };

  const handleDomainsChecked = (value: string) => {
    const updatedDomains = domains.includes(value)
      ? domains.filter(domain => domain !== value)
      : domains.concat(value);

    setDomains(updatedDomains);
    setSearchParams(search, updatedDomains);
  }

  return (
    <StyledToolbar>
      <StyledContainer>
        <StyledFlex>
          <StyledLabel>
            <span>Search</span>
            <StyledInput
              type="text"
              placeholder="Enter Name"
              value={search}
              onChange={(event) => handleSearchInput(event.target.value)}
            />
          </StyledLabel>

          <StyledFlex
            align="center"
            margin="0 65px"
          >
            <StyledCaption margin="0 30px 0 0">Show Only</StyledCaption>
            <CheckboxGroup
              name="domain"
              onClickCheckboxButton={handleDomainsChecked}
              selectedValues={domains}
            >
              <Checkbox value="org" labelText=".org" />
              <Checkbox value="com" labelText=".com" />
              <Checkbox value="biz" labelText=".biz" />
            </CheckboxGroup>
          </StyledFlex>
        </StyledFlex>
      </StyledContainer>
    </StyledToolbar>
  );
}

export default withRouter(Toolbar);