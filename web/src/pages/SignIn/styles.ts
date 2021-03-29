import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: rgb(18, 18, 20);
`;

export const Content = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 32px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  padding: 64px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em 0px 2.65em;
  border-radius: 5px;
  margin-top: 10px;
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin: 8px 0px 24px;
  opacity: 0.8;
  transition: opacity 0.2s ease 0s;
  align-self: flex-start;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  height: 50px;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    background-color: #f6af5ceb;
  }
`;

export const SignUpWrapper = styled.div`
  font-size: 14px;
  margin-top: 24px;
  color: rgb(204, 204, 204);
  text-align: center;
`;
