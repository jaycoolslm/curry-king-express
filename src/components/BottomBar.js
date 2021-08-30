import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import RestaurantIcon from '@material-ui/icons/Restaurant'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PhoneIcon from '@material-ui/icons/Phone';

const bottomNavContainer = {
    display: 'flex',
    justifyContent: 'center'
}

const bottomNav = {
    backgroundColor: '#138808',
    position: 'fixed',
    bottom: 10,
    width: '75vw',
    borderRadius: '10px',
}

const icons = {
    color: 'white'
}

const BottomBar = () => {
    return (
        <div style={bottomNavContainer}>
            <BottomNavigation style={bottomNav} showLabels >
                <BottomNavigationAction label="Menu" icon={<RestaurantIcon style={icons} />} />
                <BottomNavigationAction label="Specialties" icon={<FavoriteIcon style={icons} />} />
                <BottomNavigationAction label="Contact" icon={<PhoneIcon style={icons} />} />

                {/* 
                    To Do: 
                    Change label colors to white
                    !!!
                */}
            </BottomNavigation>    
        </div>
        
    )
}

export default BottomBar
