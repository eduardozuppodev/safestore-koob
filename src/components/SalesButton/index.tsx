import React from 'react';

import { Container, BtnSold } from './styles';

type Props = {
  title: string;
};

export const SalesButton: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <BtnSold>{title}</BtnSold>
    </Container>
  );
};
