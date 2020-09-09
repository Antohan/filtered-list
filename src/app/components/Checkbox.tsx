import React from 'react';
import { StyledCheckbox } from '../../theme';

interface Props {
  value: string;
  labelText: string;
  [key: string]: any;
}

const Checkbox = (props: Props) => {
  const {
    onChange,
    value,
    labelText, 
    checked,
    name
  } = props;
  const id = `checkbox-${value}`;

  return (
    <StyledCheckbox>
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
      />
      <label htmlFor={id}>{labelText}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;