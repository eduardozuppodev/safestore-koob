/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Container, BtnSold } from './styles';

type Props = {
  title: string;
  onClick: () => void;
};

export const SalesButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <Container>
      <BtnSold onClick={onClick}>{title}</BtnSold>
    </Container>
  );
};
