import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import { Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={{ marginTop: '60px' }}>
                <Grid container sx={{ textAlign: 'center' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>

                        <Typography style={{ fontWeight: '600', letterSpacing: '.2rem' }} component="div" variant="h4" >
                            Appointment
                        </Typography>
                        <hr style={{ width: '50%', border: '2px solid #ddd' }} />
                        <Calender date={date} setDate={setDate}></Calender>

                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <img width='100%' src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;