import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null)
  const onSubmit = data => {
    setShippingData(data)
    console.log('form submitted', data)
  };

  const handlePaymentSuccess = paymentId => {
    const orderDetails = {
      ...loggedInUser,
      shipment: shippingData,
      paymentId,
      orderTime: new Date()
    };

    fetch('https://powerful-lowlands-88233.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('your order placed successfully');
        }
      })
  }

  console.log(watch("example"));

  return (
    <div className="row">
      <Navbar></Navbar>
      <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div style={{  margin: '10%', padding: '5%' }}>
        <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
          <h2>Please Pay for me</h2>
          <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Shipment;
