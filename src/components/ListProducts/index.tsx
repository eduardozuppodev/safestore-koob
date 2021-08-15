/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CardProduct } from '../../components';

import { Container, Content } from './styles';

import api from '../../services/api';

type ProductType = {
  _id: string;
  name: string;
  brand: string;
  quantity: number;
  price: string;
  category: string;
};

export const ListProducts: React.FC = () => {
  // Listando Produtos

  //Declarando state
  const [products, setProducts] = useState([]);

  // Pegando dados do endpoint
  useEffect(() => {
    api.get('products').then(({ data }) => {
      setProducts(data);
    });
  }, []);

  //
  const handleSoldProduct = async (_id: string) => {
    await api.put('products', { _id });
  };

  return (
    <Container>
      <Content>
        {products.map((product: ProductType, id: number) => (
          <CardProduct
            key={id}
            name={product.name}
            brand={product.brand}
            quantity={product.quantity}
            price={product.price}
            category={product.category}
          />
        ))}
      </Content>
    </Container>
  );
};
