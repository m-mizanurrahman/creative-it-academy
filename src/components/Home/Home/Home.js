import React, { useEffect, useState } from 'react';
import Event from '../../Event/Event';
import Testimonial from '../../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="row "><br/>

        <Header></Header> 
        <Carousel></Carousel>
            <div>
                <div style={{ marginTop: '200px', textAlign: 'center' }}>
                <p >Services</p>
                <h1 >Available Services We Provide</h1>
                </div>
                
                {
                    events.map(event => <Event key={event.name} event={event}></Event>)
                }
            </div><br/>
            
            
            <div>
            <div style={{ marginTop: '200px', textAlign: 'center' }}>
                <p >Reviews</p>
                <h1 > What Clients Say About Us</h1>
                </div>
                
                {
                    reviews.map(review => <Testimonial key={review.name} review={review}></Testimonial>)
                }
            </div><br/>

            <div>
            <Contact></Contact>

                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;