import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const AddReview = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            review: data.review
        }
        const url = `https://powerful-lowlands-88233.herokuapp.com/addReview`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b178ae440669f775e70fa3c9bce4bcc2');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="m-5 text-center">Add Your Valuable Review Here</h1>
            <form className="m-5 text-center" onSubmit={handleSubmit(onSubmit)}>
                <p>Name: <input type="text" ref={"name"} name="name" defaultValue="Name" ref={register} /></p>
                <p>Review: <input ref={"review"} name="review" defaultValue="review" ref={register} /> </p><b></b>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default AddReview;

