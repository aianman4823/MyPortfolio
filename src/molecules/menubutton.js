import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { BrowserRouter, Route, Link } from 'react-router-dom';


export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    

    return (
        <div>
            <Button style={styles.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link style={styles.text} to="/portfolio">
                    <MenuItem  onClick={handleClose}>MyPortfolio</MenuItem>
                </Link>
                <Link style={styles.text} to="/about">
                    <MenuItem  onClick={handleClose}>About Me</MenuItem>
                </Link>
                <Link style={styles.text} to="/works">
                    <MenuItem onClick={handleClose}>My Works</MenuItem>
                </Link>
                <Link style={styles.text} to="/contact">
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

const styles={
    button:{
        color:'white',
        fontSize:'20px',
    },
    text:{
        color:'black',
        textDecoration:'none',
    },
}