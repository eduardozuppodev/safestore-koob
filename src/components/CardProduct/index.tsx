import React from 'react';
import Status from '../Status';

import { Container, Title, DescriptionIten, Brand, Quantity, Price, Category } from './styles';

type Props = {
  name: string;
  brand: string;
  quantity: number;
  price: string;
  category: string;
};

const CardProduct: React.FC<Props> = ({ name, brand, quantity, price, category }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <DescriptionIten>
        <Brand>Marca: {brand}</Brand>
        <Quantity>Qtd: {quantity}</Quantity>
        <Price>Preço: R${price}</Price>
        <Category>Categoria: {category}</Category>
      </DescriptionIten>
      <Status />
    </Container>
  );
};

export default CardProduct;
