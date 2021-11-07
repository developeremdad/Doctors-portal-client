import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../../AppointmentBooking/AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    console.log(date);
    return (
        <>
            <Navigation />
            <AppointmentHeader
                date={date}
                setDate={setDate}
            ></AppointmentHeader>
        </>
    );
};

export default Appointment;