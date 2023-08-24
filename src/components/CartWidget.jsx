import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, 
    Flex, 
    Spacer, 
    Box,
    Text,
    Divider,
  } from '@chakra-ui/react'
const CartWidget = () => {
  return (
    <div>
        <Flex>
            <box color="accent.50" fontSize='xl'>
            <span class="material-symbols-outlined">
                shopping_cart
            </span>
            </box>
            <Divider/>
            <box color="accent.50" fontSize='xl'>
                <p>6</p>
            </box>
        </Flex>
    </div>
  )
}

export default CartWidget
