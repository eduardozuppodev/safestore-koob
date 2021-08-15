import React, { useState } from 'react';

import { Container, Content, ContentTitle, Title, SubTitle, ContentButton, OpacityButton } from './styles';
import Modal from '../Modal';

export const Header: React.FC = () => {
  // Estado do modal para abrir e fechar
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Modal onClose={() => setModal(false)} />}
      <Container>
        <Content>
          <ContentTitle>
            <Title>SafeStore</Title>
            <SubTitle>Conveniência</SubTitle>
          </ContentTitle>
          <ContentButton>
            <OpacityButton onClick={() => setModal(true)}>Cadastrar Produtos</OpacityButton>
          </ContentButton>
        </Content>
      </Container>
    </>
  );
};
