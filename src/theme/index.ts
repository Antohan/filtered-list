import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
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

const StyledContainer = styled.section.attrs((props: any) => ({
  maxWidth: `${props.maxWidth}px` || "1440px,"
}))`
  max-width: ${props => props.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

const StyledList = styled.ul`
  list-style: none;
  max-width: 1270px;
  padding: 0;
  margin: 24px auto;
`;

const StyledCard = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 28px;
  margin-bottom: 24px;
  background-color: #fff;
`;

const StyledCardTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
`;

const StyledCardSubhead = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #959595;
`;

const StyledCardText = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

const StyledJambo = styled.div`
  background-color: #fff;
  display: inline-block;
  width: 100%;

  h1 {
    font-family: RoadRadio, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    color: #292929;
  }
`;

const StyledToolbar = styled.div`
  background: #2753F0;
  height: 90px;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  color: #fff;
  font-size: 18px;
  line-height: 21px;

  span {
    margin-right: 12px;
  }
`;

const StyledInput = styled.input`
  background: #fff;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 15px 12px;
  outline: none;
  width: 244px;
`;

export {
  GlobalStyle,
  StyledContainer,
  StyledList,
  StyledCard,
  StyledCardTitle,
  StyledCardSubhead,
  StyledCardText,
  StyledJambo,
  StyledToolbar,
  StyledLabel,
  StyledInput,
};