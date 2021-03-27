import React from 'react';

import CardJob from 'components/CardJob';
import CustomHeaderDetails from 'components/HeaderDetails';

import { CLOSED, IN_PROGRESS } from 'utils/constants';

import { Container, Background } from './styles'

export default function Dashboard() {

  const data = [
    {
      id: 0,
      title: 'Pizzaria guloso',
      value: 4500.00,
      deadline: '10 horas',
      status: IN_PROGRESS
    },
    {
      id: 1,
      title: 'Prust Modas',
      value: 4500.00,
      deadline: '6 dias para entrega',
      status: CLOSED
    },
    {
      id: 2,
      title: 'Pizzaria guloso',
      value: 4500.00,
      deadline: '10 horas',
      status: CLOSED
    },
    {
      id: 3,
      title: 'Pizzaria guloso',
      value: 4500.00,
      deadline: '10 horas',
      status: IN_PROGRESS
    },
  ]

  const handleEdit = (jobId: number) => { };

  const handleDelete = (jobId: number) => { };

  return (
    <Container>
      <CustomHeaderDetails />
      {data.map(item => (
        <CardJob key={item.id} data={item} onClickDelete={handleDelete} onClickEdit={handleEdit} />
      ))}
      <Background />
    </Container>
  );
}