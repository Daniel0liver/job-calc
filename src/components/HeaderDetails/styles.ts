import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 12vh;
  border-top: solid 1px #4f4f5b;
  padding: 1rem 0rem;
`;

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoItem = styled.div`
  margin-right: 3rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SubTitle = styled.h6`
  color: ${({ theme }) => theme.palette.primary.text.p};
  font-weight: 500;
  font-size: 15px;
  margin-top: 0.5rem;
`;
