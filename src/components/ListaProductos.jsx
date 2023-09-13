import React from 'react';
import { Grid } from '@chakra-ui/react';
import TarjetaProducto from './TarjetaProducto';
import { productos } from './productos'; 

function ListaProductos() {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </Grid>
  );
}

export default ListaProductos;
