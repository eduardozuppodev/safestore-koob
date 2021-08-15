import React from 'react';
import { CardProduct } from '../../components';

import { Container, Content } from './styles';

export const ListProducts: React.FC = () => {
  return (
    <Container>
      <Content>
        <CardProduct name={'Tênis Esportivo'} brand={'Nike'} quantity={15} price={'20.00'} category={'Calçados'} />
        <CardProduct name={'Camisa PSG'} brand={'Nike'} quantity={2} price={'200.00'} category={'Camisetas'} />
        <CardProduct name={'Boné New Era'} brand={'New Era'} quantity={22} price={'150.00'} category={'Bonés'} />
        <CardProduct name={'Moletom Lacoste'} brand={'Lacoste'} quantity={3} price={'420.00'} category={'Moletons'} />
        <CardProduct
          name={'Chinelo Havaianas'}
          brand={'Havaianas'}
          quantity={15}
          price={'24.99'}
          category={'Chinelos'}
        />
        <CardProduct name={'Tênis Esportivo'} brand={'Puma'} quantity={156} price={'200.00'} category={'Calçados'} />
      </Content>
    </Container>
  );
};
