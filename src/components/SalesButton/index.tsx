/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Container, BtnSold } from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

export const SalesButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Container>
      <BtnSold onClick={onPress}>{title}</BtnSold>
    </Container>
  );
};
