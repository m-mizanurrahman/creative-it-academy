import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Review from '../Review/Review';

const Order = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://powerful-lowlands-88233.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="text-center m-5">
                <h1>Total Order List</h1>
                {
                    events.map(event => <Review key={event.name} event={event}></Review>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Order;