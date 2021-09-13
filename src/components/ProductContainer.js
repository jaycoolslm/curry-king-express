import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product'

// Images

import butterChicken from '../images/butterChicken.jpeg'
import chickenMadras from '../images/chickenMadras.jpeg'
import chickenTikka from '../images/chickenTikkaMassala.jpeg'
import chilliPaneer from '../images/chiliPaneer.jpeg'
import onionBhajis from '../images/onionBhajis.jpeg'


// Styles

const gridStyle = {
    marginTop: '15vh'
}

const ProductContainer = () => {
    return (
        <Grid container spacing={10} style={gridStyle}>
            <Grid item xs={12} md={6}>
                <Product 
                    image={butterChicken}
                    title="Butter Chicken"
                    description="Tender chicken pieces immersed in a creamy butter based sauce cooked with the finest spices."
                /> 
            </Grid>
            <Grid item xs={12} md={6}>
                <Product 
                    image={chickenMadras}
                    title="Chicken Madras"
                    description="Chicken stewed in an onion and tomato based sauce. Flavoured with authentic Indian spices."
                />     
            </Grid>
            <Grid item xs={12} md={6}>
                <Product 
                    image={chickenTikka}
                    title="Chicken Tikka Massala"
                    description="Chefs Special - Flavourful marinated chicken tikka pieces served with subtle spiced tomato- cream sauce."
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Product 
                    image={chilliPaneer}
                    title="Chilli Paneer"
                    description="Mouth watering Paneer cooked with a soy sauce base, accompanied with spring onions and green bell peppers."
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Product 
                    image={onionBhajis}
                    title="Onion Bhajis"
                    description="Onions cut in thin slices, immersed in a spiced batter and fried to a perfect crisp."
                />
            </Grid>
                    
        </Grid>
    )
}

export default ProductContainer
