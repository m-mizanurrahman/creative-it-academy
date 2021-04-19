import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IeFliLuAR4seXwioO61E70PaP8PBWLR3Ud0GYETsTiGSTBO4jtbYyUedMJykOp9AVfXypMSQIUxMosyAEXTKJLH00Im0FuvUD');


const ProcessPayment = ({handlePayment}) => {
    return (
        
        <Elements style={{ margin: '10%'}} stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;