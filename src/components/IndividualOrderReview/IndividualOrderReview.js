import React from 'react';
import '../Event/Event'

const IndividualOrderReview = (props) => {
    const { name, price, weight, email, orderTime } = props.event
    
    return (
        <div className="m-5">            
            <form action="/action_page.php">
                <li>Name: {name},  Email:{email}, OrderTime: {orderTime}                       
                </li>
            </form>
        </div>
    );
};

export default IndividualOrderReview;