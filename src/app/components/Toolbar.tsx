import React, { useState, useCallback } from 'react';
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
  const [domains, setDomains] = useState(query.getAll('domain'));

  const setSearchParams = useCallback(
    (searchValue: string, domainsList: string[]) => {
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
    },
    [props.history],
  );

  const handleSearchInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setSearch(value);
      setSearchParams(value, domains);
    },
    [domains, setSearchParams],
  );

  const handleDomainsChecked = useCallback(
    (value: string) => {
      const updatedDomains = domains.includes(value)
        ? domains.filter(domain => domain !== value)
        : domains.concat(value);

      setDomains(updatedDomains);
      setSearchParams(search, updatedDomains);
    },
    [domains, search, setSearchParams],
  );

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
              onChange={handleSearchInput}
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