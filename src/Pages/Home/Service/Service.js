import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const Service = ({ service }) => {
    const { name, description, img } = service;
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ height: '80px', width: 'auto', margin: '0 auto' }}
                    image={img}
                    alt="dentist img"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>

            </Card>
        </Grid>

    );
};

export default Service;