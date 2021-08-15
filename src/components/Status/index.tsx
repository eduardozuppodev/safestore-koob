import React from 'react';

import { Container, Button } from './styles';

type Props = {
  active: boolean;
};

export const Status: React.FC<Props> = ({ active = true }) => {
  return (
    <Container>
      <Button active={active}>Com Estoque</Button>
    </Container>
  );
};
