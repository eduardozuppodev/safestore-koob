import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { Header, ListProducts } from './components';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ListProducts />
      <GlobalStyles />
    </>
  );
};

export default App;
