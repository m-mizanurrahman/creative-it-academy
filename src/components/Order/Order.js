import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Review from '../Review/Review';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://powerful-lowlands-88233.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            <Navbar></Navbar>
            <h1>Order List</h1>
            {
                events.map(event => <Review key={event.name} event={event}></Review>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;