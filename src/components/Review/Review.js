import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Review = (props) => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const { name, price, weight, email, orderTime } = props.event
    
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            review: data.review
        }
        const url = `http://localhost:5055/addStatus`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    
    
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div class="form-row align-items-center">
                        <div>
                            <li>Name: {name},  Email:{email}, OrderTime: {orderTime}</li>
                        </div>
                        <div class="col-auto my-1">
                            <select type="text" ref={"name"} name="name" defaultValue="Name" ref={register}  class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option value="Pending">Pending</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div class="col-auto my-1">
                            <button type="submit" class="btn btn-primary">Update Order Status</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;