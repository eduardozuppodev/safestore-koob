/* eslint-disable @typescript-eslint/no-empty-function */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import api from '../../services/api';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Content, CloseContainer, Form, InputContainer, Label, Input, Btn } from './styles';

type Props = {
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ onClose = () => {} }) => {
  // State dos campos do form
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  // Guardando valores do form
  const state: any = {
    name,
    brand,
    quantity,
    price,
    category,
  };

  // Função para enviar form para o backend
  const handleFormSubmit = async (e: any, state: any) => {
    e.preventDefault();

    await api.post('products', state);

    // Recarregando página após o submit
    return window.location.reload();
  };

  return (
    <Container>
      <Content>
        <CloseContainer>
          <AiOutlineClose onClick={onClose} />
        </CloseContainer>
        <Form onSubmit={(e) => handleFormSubmit(e, state)}>
          <InputContainer>
            <Label>Produto:</Label>
            <Input placeholder="Digite o nome do produto" onChange={(e: any) => setName(e.target.value)}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Marca:</Label>
            <Input placeholder="Digite a marca do produto" onChange={(e: any) => setBrand(e.target.value)}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Quantidade:</Label>
            <Input
              type="number"
              onChange={(e: any) => setQuantity(e.target.value)}
              placeholder="Digite a quantidade no estoque"
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Preço:</Label>
            <Input placeholder="Digite o preço do produto" onChange={(e: any) => setPrice(e.target.value)}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Categoria:</Label>
            <Input
              placeholder="Digite a categoria do produto"
              onChange={(e: any) => setCategory(e.target.value)}
            ></Input>
          </InputContainer>
          <Btn type="submit">Cadastrar Produto</Btn>
        </Form>
      </Content>
    </Container>
  );
};

export default Modal;
