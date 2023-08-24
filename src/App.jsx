import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from './components/colores'
import NavBar from './components/NavBar'
import ItemListContauner from './components/ItemListContauner'

const App = () => {
  return (
    <>
    <ChakraProvider theme={theme}>
      <NavBar/>
      <ItemListContauner greeting={"BIENVENIDOS"}/>
    </ChakraProvider>
    </>

  )
}

export default App





