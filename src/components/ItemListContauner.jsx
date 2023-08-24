import React from 'react'
import { Box, Center } from "@chakra-ui/react";

const ItemListContauner = ({greeting}) => {
  return (
    
    <Box height="100vh" display="flex" alignItems="flex-start" justifyContent="center" color="accent.50" fontSize="xl">
      <Center>  
        <h1 fontSize="xl">
        {greeting}
        </h1>
    </Center>
    </Box>
)
}

export default ItemListContauner
