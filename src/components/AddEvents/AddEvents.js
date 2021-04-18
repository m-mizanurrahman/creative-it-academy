import axios from 'axios';
import React, {useState } from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const AddEvents = () => { 

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
            weight: data.weight
        }
        const url = `https://powerful-lowlands-88233.herokuapp.com/addEvent`

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
            <h1>Add your awesome service here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Price: <input type="number" ref={"price"} name="price" defaultValue="0" ref={register} /></p>
                
                <p>Service Name: <input ref={"name"} name="name" defaultValue="name" ref={register} /> </p><b></b>

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit"/>                
            </form>
            <br/>
            <br/>            
            <Footer></Footer>
        </div>
    );
};

export default AddEvents;

