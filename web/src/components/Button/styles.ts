import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px 12px 12px;
  width: 260px;
  height: 56px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    opacity: 0.9;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.palette.primary.contrastText}29;
  border-radius: 5px;
`;

export const Label = styled.h6`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
