import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import IndividualOrderReview from '../IndividualOrderReview/IndividualOrderReview';

const IndividualOrder = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://powerful-lowlands-88233.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            <Navbar></Navbar>
            <h1>Customer Order List</h1>
            {
                events.map(event => <IndividualOrderReview key={event.name} event={event}></IndividualOrderReview>)
            }
            <Footer></Footer>
        </div>
    );
};

export default IndividualOrder;