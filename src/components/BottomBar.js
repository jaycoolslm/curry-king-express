import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import RestaurantIcon from '@material-ui/icons/Restaurant'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'gatsby';

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
                <Link to="/menu"><BottomNavigationAction label="Menu" icon={<RestaurantIcon style={icons} />} /></Link>
                <Link to="/private"><BottomNavigationAction label="Hire" icon={<EventAvailableIcon style={icons} />} /></Link>
                <Link to="/contact"><BottomNavigationAction label="Contact" icon={<PhoneIcon style={icons} />} /></Link>

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
