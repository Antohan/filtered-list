import React from 'react';

import { StyledFlex } from '../../theme';

interface Props {
  name: string;
  selectedValues: string[];
  onClickCheckboxButton(value: string): void;
  children: React.ReactNode[];
}

const CheckboxGroup = (props: Props) => {
  const {
    name,
    selectedValues,
    onClickCheckboxButton,
    children,
  } = props;

  return (
    <StyledFlex>
      {React.Children.map(children, (checkbox: any) =>
        React.cloneElement(checkbox, {
          ...checkbox.props,
          onChange: () => onClickCheckboxButton(checkbox.props.value),
          checked: selectedValues.includes(checkbox.props.value),
          name,
        })
      )}
    </StyledFlex>
  );
};

export default CheckboxGroup;