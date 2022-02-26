import React from 'react'
import Header from './Components/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

function App () {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box sx={{ bgcolor: '#D3D3D3', height: '100vh', padding: '10px'}} >
          <Header />
        </Box>
      </Container>
    </>
  )
}

export default App
