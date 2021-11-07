import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../../AppointmentBooking/AppointmentHeader/AppointmentHeader';
import AvailableAppoinment from '../AvailableAppointment/AvailableAppoinment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <Navigation />
            <AppointmentHeader
                date={date}
                setDate={setDate}
            ></AppointmentHeader>

            <AvailableAppoinment date={date}></AvailableAppoinment>
        </>
    );
};

export default Appointment;