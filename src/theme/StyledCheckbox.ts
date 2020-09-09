import styled from 'styled-components';

const StyledCheckbox = styled.div`
  position: relative;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 42px;
    background: #292929;
    border-radius: 3px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    cursor: pointer;
  }

  input {
    opacity: 0;
    position: absolute;

    &:checked + label {
      background: #fff;
      color: #000;
    }
  }

  & + & {
    margin-left: 16px;
  }
`;

export default StyledCheckbox;