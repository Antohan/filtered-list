import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #e5e5e5;
  }
`;

export { default as StyledContainer } from './StyledContainer';
export { default as StyledList } from './StyledList';
export { StyledCard, StyledCardTitle, StyledCardSubhead, StyledCardText } from './StyledCard';
export { default as StyledJambo } from './StyledJambo';
export { default as StyledToolbar } from './StyledToolbar';
export { default as StyledLabel } from './StyledLabel';
export { default as StyledInput } from './StyledInput';
export { default as StyledFlex } from './StyledFlex';
export { default as StyledCheckbox } from './StyledCheckbox';
export { default as StyledCaption } from './StyledCaption';
