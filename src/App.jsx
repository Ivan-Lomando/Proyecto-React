import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import { ChakraProvider } from "@chakra-ui/react";

import theme from './components/colores';
import NavBar from './components/NavBar';
import ItemListContauner from './components/ItemListContauner';
import DetallesProducto from './components/DetallesProducto';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes> {}
          <Route path="/" element={<ItemListContauner />} />
          <Route path="/producto/:id" element={<DetallesProducto />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
