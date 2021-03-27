import styled from 'styled-components';

export const Container = styled.div``;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 25vh;
  left: 0px;
  top: 0px;
  z-index: -10;

  background: ${({ theme }) => theme.palette.primary.main};
`;
