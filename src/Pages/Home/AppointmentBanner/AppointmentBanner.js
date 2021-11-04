import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, CardMedia, Container, Typography } from '@mui/material';
import doctorImg from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, pt: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <CardMedia
                            component="img"
                            style={{ width: '100%', marginTop: '-150px' }}
                            image={doctorImg}
                            alt="doctor img"
                        />
                    </Grid>
                    <Grid xs={7}>
                        <Typography style={{ color: '#6dd6d5', fontSize: '18px', margin: '15px 0' }} variant="h6" gutterBottom component="div">
                            APPOINTMENT
                        </Typography>
                        <Typography style={{ fontWeight: 600, color: '#ffff' }} variant="h4" gutterBottom component="div">
                            Make An Appointment <br /> Today
                        </Typography>
                        <Typography sx={{ my: 5 }} variant="subtitle2" gutterBottom component="div" color="lightGray">
                            It is a long established fact that a reader will be distactedby the radable content of a page when looking at its
                        </Typography>
                        <Button style={{ background: '#18d2b2', borderRadius: '0px', padding: '5px 40px', color: '#ffff' }} >Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default AppointmentBanner;