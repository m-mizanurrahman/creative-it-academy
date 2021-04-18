import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const Buy = () => {
    const {eventKey} = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        fetch('https://powerful-lowlands-88233.herokuapp.com/event/' + eventKey)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [eventKey])

    return (
        <div>
            <Navbar></Navbar>
            <h1>Check Out</h1>
            <h1>{event.name}</h1>
            <h5>Price: $ {event.price} </h5>
            <img src={event.imageURL} alt=""/><br/>
            <h1><Link to="/shipment"><button>Check Out</button> </Link></h1>
            <Footer></Footer>
        </div>
    );
};

export default Buy;