import styled from 'styled-components';

interface Props {
  justify?: string;
  align?: string;
  margin?: string;
}

const StyledFlex = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start' };
  margin: ${({ margin }) => margin || 'unset'};
`;

export default StyledFlex;