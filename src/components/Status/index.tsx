/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Container, Button } from './styles';

type Props = {
  active: boolean;
};

export const Status: React.FC<Props> = ({ active }) => {
  return (
    <Container>
      {active && <Button active>Com Estoque</Button>}
      {active == false && <Button active={false}>Sem Estoque</Button>}
    </Container>
  );
};
