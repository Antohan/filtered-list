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
  const [domens, setDomens] = useState(query.getAll('domen'));

  const setSearchParams = (searchValue: string, domensList: string[]) => {
    const searchParams = new URLSearchParams();

    if (searchValue) {
      searchParams.set('search', searchValue)
    }

    if (domensList && domensList.length) {
      for (const domen of domensList) {
        searchParams.append('domen', domen);
      }
    }

    props.history.push({search: `?${searchParams.toString()}`});
  }

  const handleSearchInput = (value: string) => {
    setSearch(value);
    setSearchParams(value, domens);
  };

  const handleDomenChecked = (value: string) => {
    const updatedDomens = domens.includes(value)
      ? domens.filter(domen => domen !== value)
      : domens.concat(value);

    setDomens(updatedDomens);
    setSearchParams(search, updatedDomens);
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
              name="domen"
              onClickCheckboxButton={handleDomenChecked}
              selectedValues={domens}
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