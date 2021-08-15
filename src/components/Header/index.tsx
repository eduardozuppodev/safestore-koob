import React from 'react';

import { Container, Content, ContentTitle, Title, SubTitle, ContentButton, OpacityButton } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>SafeStore</Title>
          <SubTitle>Conveniência</SubTitle>
        </ContentTitle>
        <ContentButton>
          <OpacityButton>Cadastrar Produtos</OpacityButton>
        </ContentButton>
      </Content>
    </Container>
  );
};
