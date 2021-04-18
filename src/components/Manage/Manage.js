import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import Remove from '../Remove/Remove';

const Manage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h1>Manage Your Business</h1>
            <div className="row my-5 mx-5">
                {
                    events.map(event => <Remove event={event}></Remove>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Manage;