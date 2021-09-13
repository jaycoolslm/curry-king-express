import React from 'react'
import { Grid } from '@material-ui/core'
import TopBar from '../components/TopBar'
import ProductContainer from '../components/ProductContainer'


// Styles

const topbar_menu = {
    margin: '200px'
}

const Menu = () => {
    return (
        <>
            <TopBar />
            <Grid container direction="column"  styles={topbar_menu}>
                <Grid item></Grid>
                <Grid item container>
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}> 
                        <ProductContainer />
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            </Grid>
        </>
    )
}

export default Menu
