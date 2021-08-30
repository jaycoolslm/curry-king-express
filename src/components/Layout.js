import React from 'react'
import { Container, Typography } from '@material-ui/core'


// Styles 

const title = {
    marginTop: '10vh',
    textAlign: 'center',
    color: '#000080'
}


// Functions

const Layout = ({ header }) => {
    return (
        <Container maxWidth='md'>
            <Typography style={title} variant='h3'>{header}</Typography>
        </Container>
    )
}

export default Layout
