import React from 'react';

import PlusIcon from 'assets/images/plus-24.svg';

import Button from 'components/Button';

import { Container, InfoWrapper, ButtonWrapper, InfoItem, Title, SubTitle } from './styles';

export default function CustomHeaderDetails() {
  return (
    <Container>
      <InfoWrapper>
        <InfoItem>
          <Title>12</Title>
          <SubTitle>Projetos ao total</SubTitle>
        </InfoItem>
        <InfoItem>
          <Title>7</Title>
          <SubTitle>Em andamento</SubTitle>
        </InfoItem>
        <InfoItem>
          <Title>4</Title>
          <SubTitle>Encerrados</SubTitle>
        </InfoItem>
      </InfoWrapper>
      <ButtonWrapper>
        <Button title="ADICIONAR NOVO JOB" icon={PlusIcon} />
      </ButtonWrapper>
    </Container>
  )
}