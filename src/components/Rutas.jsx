import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { Box, Image, Badge, Text, Button } from '@chakra-ui/react';

function TarjetaProducto({ producto }) {
  return (
    <Link to={`/producto/${producto.id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {/* Resto de tu tarjeta */}
      </Box>
    </Link>
  );
}

export default TarjetaProducto;
