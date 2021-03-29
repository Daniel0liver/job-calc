import React from 'react';

import AlertIcon from 'assets/images/alert-octagon.svg';
import LogoIcon from 'assets/images/logo.svg';
import ProfileIcon from 'assets/images/profile.png';

import {
  Header,
  Container,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
  Alert,
  ImageProfile,
  UserName,
  Subtitle,
  LinkWrapper,
  LabelWrapper,
} from './styles';

export default function CustomHeader() {
  return (
    <Header>
      <Container>
        <LeftWrapper>
          <img src={LogoIcon} alt="Logo principal" />
        </LeftWrapper>
        <CenterWrapper>
          <img src={AlertIcon} alt="Icone alerta" />
          <Alert>Você tem 2 horas livres no seu dia</Alert>
        </CenterWrapper>
        <RightWrapper>
          <LinkWrapper>
            <LabelWrapper>
              <UserName>Jaqueline</UserName>
              <Subtitle>Ver perfil</Subtitle>
            </LabelWrapper>
            <ImageProfile src={ProfileIcon} />
          </LinkWrapper>
        </RightWrapper>
      </Container>
    </Header>
  );
}
