import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { useState, useEffect } from 'react'


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
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
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
