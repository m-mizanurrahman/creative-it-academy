import React from 'react';

const Remove = ({ event }) => {
    function deleteEvent(id) {
        console.log(id);
        fetch(`http://localhost:5055/deleteEvent/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully');
            })
    }
    return (
        <div style={{
            width: '200px',
            float: 'left',
            border: '1px solid black',
            margin: '5px',
            padding: '2px',
            height: '200px'
        }}
            className="item">
            <img style={{ width: '80px', height: '50px' }} src={event.imageURL} alt="pic" />
            <h3>{event.name} <br /> <button onClick={() => deleteEvent(event._id)} >Delete</button></h3>
        </div>
    );
};

export default Remove;