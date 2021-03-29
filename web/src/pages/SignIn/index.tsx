import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  FormWrapper,
  Form,
  Input,
  Link,
  Button,
  SignUpWrapper,
} from './styles';

export default function SignIn() {
  const history = useHistory();

  const submit = () => {
    history.push('/dashboard');
  };

  return (
    <Container>
      <Content>
        <FormWrapper>
          <Form onSubmit={submit}>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Senha" />
            <Link>Esqueci minha senha</Link>
            <Button type="submit">Entrar</Button>
          </Form>
          <SignUpWrapper>
            Não tem uma conta? <Link>Registre-se</Link>
          </SignUpWrapper>
        </FormWrapper>
      </Content>
    </Container>
  );
}
