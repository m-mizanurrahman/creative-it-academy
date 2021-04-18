import React from 'react';
import { Link } from 'react-router-dom';
import '../Event/Event'
import './Event.css'


const Event = (props) => {
    const { _id, name, imageURL, price, weight } = props.event;

    return (
        <main style={{ margin: '100px', marginBottom: '100px' }}>
            <div style={{
                width: '350px',
                float: 'left',
                border: '1px solid black',
                margin: '15px',
                padding: '20px',
                height: '300px'

            }}
                className="item service">
                <img style={{ width: '200px', height: '100px' }} src={imageURL} alt="pic" />
                <h3>Name: {name} <br />
                    <h3>Price: $ {price}</h3>

                    <Link to={"/event/" + _id}> <button>Buy</button> </Link>
                </h3>


            </div>

        </main>
    );
};

export default Event;