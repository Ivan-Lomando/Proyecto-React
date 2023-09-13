import React from 'react';
import {
  Box,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box color="accent.50" fontSize="xl">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Box>
        <Divider />
        <Box color="accent.50" fontSize="xl">
          <Text>6</Text>
        </Box>
      </Flex>
    </div>
  );
}

export default CartWidget;
