import styled from 'styled-components';

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

export {
  StyledCard,
  StyledCardTitle,
  StyledCardSubhead,
  StyledCardText,
};