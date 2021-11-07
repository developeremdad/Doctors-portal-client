import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const navBarStyle = {
    marginRight: '10px',
    color: '#ffff',
    textDecoration: 'none'
}
const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                        <NavLink style={navBarStyle} to="/home">
                            <Typography variant="h6" component="div" >
                                Home
                            </Typography>
                        </NavLink>
                        <NavLink style={navBarStyle} to="/appointment">
                            <Typography variant="h6" component="div" >
                                Appointment
                            </Typography>
                        </NavLink>
                    </Grid>
                    <NavLink style={navBarStyle} to="/">
                        <Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;