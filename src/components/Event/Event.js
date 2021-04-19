import React from 'react';
import { Link } from 'react-router-dom';
import '../Event/Event'
import { motion } from "framer-motion"

const Event = (props) => {
    const { _id, name, imageURL, price, weight } = props.event;

    return (
        <main style={{ margin: '10%' }}>
            <div style={{
                width: '350px',
                float: 'left',
                margin: '5px',
                padding: '20px',
                height: '300px'

            }}
                className="item service text-center">
                     <p>
                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} >
                    <img style={{ width: '300px', height: '200px' }} src={imageURL} alt="pic" />
                   {name} <br />
                    Price: $ {price}
                </motion.div>
                <Link to={"/event/" + _id}> <button>Buy Now</button> </Link></p>
            </div>
        </main>
    );
};

export default Event;