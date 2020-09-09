import styled from 'styled-components';

interface Props {
  maxWidth?: string;
}

const StyledContainer = styled.section<Props>`
  max-width: ${({ maxWidth }) => maxWidth + 'px' || '1440px'};
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

export default StyledContainer;