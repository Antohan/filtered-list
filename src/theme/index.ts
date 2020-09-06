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
    background-color: #E5E5E5;
  }
`;

const StyledContainer = styled.section`
  max-width: 1440px;
  width: auto;
  margin: 0 auto;
  padding 0 24px;
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  max-width: 1270px;
  padding: 0;
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
};