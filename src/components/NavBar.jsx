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
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
        <Flex bg=" primary.50">
            <Box p='4' color="accent.50" fontSize='xl'>
                <div >Sneakers-Shop</div>
            </Box>
            <Spacer />
            <Box p='4'>
                    <Menu>
                        <MenuButton  color="accent.50" fontSize='xl' >
                            Categorias
                        </MenuButton>
                        <MenuList color="accent.50" bg=" primary.50" fontSize='xl'>
                            <MenuItem bg=" primary.50">Nike</MenuItem>
                            <MenuItem bg=" primary.50">Adidas</MenuItem>
                            <MenuItem bg=" primary.50">Jordan</MenuItem>
                        </MenuList>
                    </Menu>
            </Box>
            <Spacer />
            <Box p="4">
            <CartWidget/>
            </Box>
        </Flex>

    </>
  )
}

export default NavBar
