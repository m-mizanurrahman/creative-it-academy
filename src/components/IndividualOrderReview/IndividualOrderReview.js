import React from 'react';
import '../Event/Event'

const IndividualOrderReview = (props) => {
    const { name, price, weight, email, orderTime } = props.event
    
    return (
        <div className="m-5">            
            <form>
                <li>Name: {name},  Email:{email}, OrderTime: {orderTime} <br/> Status: Ongoing                      
                </li>
            </form>
        </div>
    );
};

export default IndividualOrderReview;