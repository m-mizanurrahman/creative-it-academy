import React from 'react';

const Testimonial = (props) => {
    const { _id, name, imageURL, price, weight, review } = props.review;

    return (
        <main style={{ margin: '100px', textAlign: 'center' }}>
            <div style={{
                width: '350px',
                float: 'left',
                margin: '15px',
                padding: '20px',
                height: '200px'

            }}
                className="item ">
                <p> {review} </p>
                <div className="d-flex">
                    <img style={{ width: '50px', height: '40px' }} src={imageURL} alt="pic" />
                    <h4> {name} </h4>
                </div>
            </div>
        </main>
    );
};

export default Testimonial;