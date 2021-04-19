import React from 'react';

const Review = (props) => {
    const { name, price, weight, email, orderTime } = props.event
    return (
        <div className="m-2">            
            <form action="/action_page.php">
                <li>Name: {name},  Email:{email}, OrderTime: {orderTime}

                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">pending</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">ongoing</label>
                        <input type="radio" id="other" name="gender" value="other" />
                        <label for="other">done</label>
                        <input type="submit" value="Change Status" />
                </li>
            </form>
        </div>
    );
};

export default Review;