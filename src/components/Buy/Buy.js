import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const Buy = () => {
    const { eventKey } = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        fetch('https://powerful-lowlands-88233.herokuapp.com/event/' + eventKey)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [eventKey])

    return (
        <div>
            <Navbar></Navbar>
            <div style={{margin: '10%', backgroundColor: 'gray', textAlign: 'center', padding: '5%'}}>
                <h1>Check Out Your Service</h1>
                <img style={{width: '80%'}} src={event.imageURL} alt="" /><br />
                <h1>Service Name: {event.name}</h1>
                <h5>Price: $ {event.price} </h5>
                <h1><Link to="/shipment"><button>Check Out</button> </Link></h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Buy;