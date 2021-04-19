import React from 'react';

const Remove = ({ event }) => {
    function deleteEvent(id) {
        console.log(id);
        fetch(`https://powerful-lowlands-88233.herokuapp.com/deleteEvent/${id}`, {
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
            margin: '5%',
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