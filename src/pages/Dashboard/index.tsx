import React from 'react';

import CustomHeaderDetails from 'components/HeaderDetails';

import { Container, Background } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <CustomHeaderDetails />
      <Background />
    </Container>
  );
}