import React from 'react';

import EditIcon from 'assets/images/edit-24.svg';
import DeleteIcon from 'assets/images/trash-24.svg';

import { IN_PROGRESS } from 'utils/constants';

import {
  Container,
  BoxId,
  BoxTitle,
  BoxDeadline,
  BoxValue,
  BoxStatus,
  BoxActions,
  Id,
  JobTitle,
  Title,
  SubTitle,
  StatusWrapper,
  StatusLabel,
  ButtonAction,
} from './styles';

interface IJobItem {
  id: number;
  title: string;
  deadline: string;
  value: number;
  status: number;
}

interface ICardJobProps {
  data: IJobItem;
  onClickEdit: (jobId: number) => void;
  onClickDelete: (jobId: number) => void;
}

export default function CardJob({
  data,
  onClickDelete,
  onClickEdit,
}: ICardJobProps) {
  return (
    <Container>
      <BoxId>
        <Id>{data.id}</Id>
      </BoxId>
      <BoxTitle>
        <JobTitle>{data.title}</JobTitle>
      </BoxTitle>
      <BoxDeadline>
        <Title>PRAZO</Title>
        <SubTitle>{data.deadline}</SubTitle>
      </BoxDeadline>
      <BoxValue>
        <Title>VALOR</Title>
        <SubTitle>R$ {data.value}</SubTitle>
      </BoxValue>
      <BoxStatus>
        <StatusWrapper status={data.status}>
          <StatusLabel>
            {data.status === IN_PROGRESS ? 'Em andamento' : 'Encerrado'}
          </StatusLabel>
        </StatusWrapper>
      </BoxStatus>
      <BoxActions>
        <ButtonAction>
          <img
            src={EditIcon}
            alt="Icone de editar"
            onClick={() => onClickEdit(data.id)}
          />
        </ButtonAction>
        <ButtonAction>
          <img
            src={DeleteIcon}
            alt="Icone de deletar"
            onClick={() => onClickDelete(data.id)}
          />
        </ButtonAction>
      </BoxActions>
    </Container>
  );
}
