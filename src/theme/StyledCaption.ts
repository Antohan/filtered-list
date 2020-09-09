import styled from 'styled-components';

interface Props {
  color?: string;
  margin?: string;
}

const StyledCaption= styled.span<Props>`
  color: ${({ color }) => color || '#fff'};
  margin: ${({ margin }) => margin || 'unset'};
`;

export default StyledCaption;