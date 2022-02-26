import React from 'react'
import { Container } from './style'
import Paper from '@mui/material/Paper'

const Header = () => {
  return (
    <Paper elevation={3}>
      <Container>
        <h1>Jessica Dickerson</h1>
        <h2>Software Developer &amp; Scrum Master</h2>
      </Container>
    </Paper>
  )
}

export default Header
