import React from 'react';

import { Button, IconWrapper, Label, Icon } from './styles';

interface IButtonProps {
  title: string;
  icon: string | undefined;
}

export default function CustomButton({ title, icon }: IButtonProps) {
  return (
    <Button>
      <IconWrapper>
        {icon ? <Icon src={icon} alt="Icone do botão" /> : null}
      </IconWrapper>
      <Label>{title}</Label>{ }
    </Button>
  )
}