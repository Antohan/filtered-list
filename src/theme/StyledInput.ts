import styled from 'styled-components';

const StyledInput = styled.input.attrs({
  type: 'text',
})`
  background: #fff;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  padding: 0 15px;
  width: 244px;
  height: 42px;
`;

export default StyledInput;