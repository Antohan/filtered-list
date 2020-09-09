import React from 'react';
import { StyledFlex } from '../../theme';

interface Props {
  name: string;
  selectedValues: string[];
  onClickCheckboxButton: Function;
  children?: React.ReactNode;
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
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (element: any) =>
        React.cloneElement(element, {
          ...element.props,
          onChange: () => onClickCheckboxButton(element.props.value),
          checked: selectedValues.includes(element.props.value),
          name,
        })
      )}
    </StyledFlex>
  );
};

export default CheckboxGroup;