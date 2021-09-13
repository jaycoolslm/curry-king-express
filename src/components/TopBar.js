import * as React from "react"
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide, IconButton } from "@material-ui/core"
import StorefrontIcon from '@material-ui/icons/Storefront';


// Styles

const appBar = {
    backgroundColor: '#FF9933',
    height: '15vh',
    justifyContent: 'center'
}

const toolBar = {
    justifyContent: 'space-between',
}

const text = {
    fontStyle: 'italic'
}


// Functions

const HideOnScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const TopBar = () => {

    return (
        <HideOnScroll>
            <AppBar style={appBar}>
                <Toolbar style={toolBar}>
                    <Typography style={text} variant='h3' align='center'>Curry King Express</Typography>
                    <IconButton edge="end" color="inherit" aria-label="menu" href='/'>
                        <StorefrontIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>    
        </HideOnScroll>
        
    )
}

export default TopBar