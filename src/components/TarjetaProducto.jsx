import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import { Box, Image, Text, Button } from '@chakra-ui/react';

function TarjetaProducto({ producto }) {
  return (
    <Link to={`/producto/${producto.id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={producto.imagen} alt={producto.nombre} />
        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {producto.nombre}
          </Box>
          <Text mt="2" color="accent.50" fontSize="xl">
            $ {producto.precio}
          </Text>
          <Button colorScheme="teal" mt="2" onClick={() => "Agregar a carrito"}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Link>
  );
}

export default TarjetaProducto;

