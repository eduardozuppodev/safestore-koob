import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import ListProducts from './components/ListProducts';

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
