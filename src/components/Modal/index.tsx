import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Content, CloseContainer, Form, InputContainer, Label, Input, Btn } from './styles';

type Props = {
  onClose: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Modal: React.FC<Props> = ({ onClose = () => {} }) => {
  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Form>
          <InputContainer>
            <Label>Produto:</Label>
            <Input placeholder="Digite o nome do produto"></Input>
          </InputContainer>
          <InputContainer>
            <Label>Marca:</Label>
            <Input placeholder="Digite a marca do produto"></Input>
          </InputContainer>
          <InputContainer>
            <Label>Quantidade:</Label>
            <Input type="number" placeholder="Digite a quantidade no estoque"></Input>
          </InputContainer>
          <InputContainer>
            <Label>Preço:</Label>
            <Input placeholder="Digite o preço do produto"></Input>
          </InputContainer>
          <InputContainer>
            <Label>Categoria:</Label>
            <Input placeholder="Digite a categoria do produto"></Input>
          </InputContainer>
          <Btn type="submit">Cadastrar Produto</Btn>
        </Form>
      </Content>
    </Container>
  );
};

export default Modal;
