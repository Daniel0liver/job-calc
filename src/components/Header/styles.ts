import styled from 'styled-components';

export const Header = styled.header`
  height: 10vh;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CenterWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Alert = styled.h6`
  margin-left: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
`;

export const ImageProfile = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.palette.secondary.main};
`;

export const UserName = styled.h2`
  text-align: right;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Subtitle = styled.h6`
  margin-top: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.text.p};
`;

export const LinkWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  padding: 0.2rem 0.3rem 0.2rem 2rem;
  transition: 0.5s;

  &:hover {
    background-color: #53535fed;
    cursor: pointer;

    ${Subtitle} {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
