import React, { useState } from 'react';

import { Container, Content, ContentTitle, Title, SubTitle, ContentButton, OpacityButton } from './styles';
import { Modal } from '../../components';

type Props = {
  title: string;
  subtitle: string;
  btn: string;
};

export const Header: React.FC<Props> = ({ title, subtitle, btn }) => {
  // Estado do modal para abrir e fechar
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Modal onClose={() => setModal(false)} />}
      <Container>
        <Content>
          <ContentTitle>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </ContentTitle>
          <ContentButton>
            <OpacityButton onClick={() => setModal(true)}>{btn}</OpacityButton>
          </ContentButton>
        </Content>
      </Container>
    </>
  );
};
