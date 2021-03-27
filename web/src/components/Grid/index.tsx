import React from 'react';

import { Container, Grid } from './styles';
interface IGridProps {
  children: React.ReactNode
}

export default function GridWrapper({ children }: IGridProps) {
  return (
    <Container>
      <Grid>
        {children}
      </Grid>
    </Container>
  )
}