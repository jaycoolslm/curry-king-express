import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { useState, useEffect } from 'react'


// Styles

const logo = {
    height: '60vh',
}


// Function

const LandingPage = ({ backgroundImg, title, subtitle }) => {

    // Parallax Scrolling

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Container maxWidth='md' style={{
            // backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            marginTop: '20vh'
        }}>
            <img src={backgroundImg} alt='Logo' style={logo} />
            <Typography variant='h1' style={{
                textAlign: 'center',
                transform: `translateY(${offsetY * 0.3}px)`
            }}>{title}</Typography>
            <Typography variant='h4' style={{
                textAlign: 'center',
                transform: `translateY(${offsetY * 0.3}px)`
            }}>{subtitle}</Typography>
        </Container>
    )
}

export default LandingPage
