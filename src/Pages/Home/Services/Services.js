import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim!',
            img: whitening
        }
    ]
    return (
        <Container sx={{ my: 3 }}>
            <Grid sx={{ my: 6, textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#59c5c5' }} gutterBottom component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h3" style={{ fontWeight: '500', fontSize: '40px' }} gutterBottom component="div">
                    Services We Provide
                </Typography>
            </Grid>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.name}
                        ></Service>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;