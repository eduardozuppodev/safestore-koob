import React from 'react';

import { Container, Content, ContentTitle, Title, SubTitle, ContentButton, OpacityButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>SafeStore</Title>
          <SubTitle>Loja</SubTitle>
        </ContentTitle>
        <ContentButton>
          <OpacityButton>Cadastrar Produto</OpacityButton>
        </ContentButton>
      </Content>
    </Container>
  );
};

export default Header;
