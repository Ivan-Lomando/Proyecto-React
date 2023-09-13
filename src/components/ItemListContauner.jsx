import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import ListaProductos from './ListaProductos';

const ItemListContauner = ({ greeting, productos }) => {
  return (
    <Box height="100vh" display="flex" alignItems="flex-start" justifyContent="center" color="accent.50" fontSize="xl">
      <Center>
        <h1 fontSize="xl">{greeting}</h1>
      </Center>
      <ListaProductos productos={productos}></ListaProductos>
    </Box>
  );
}

export default ItemListContauner;

