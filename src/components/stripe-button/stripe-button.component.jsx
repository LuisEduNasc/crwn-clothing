import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HBhiTE8Fp4Y0TflSN80fskKF6kHCMxiKGsOG2kDFZW0fQIpebBeDElyN7HjJUCknsCSLrlByKUQjQ1l0olzZTvb00I2ZbwajR';

    const onToken = token => {
        console.log("StripeCheckoutButton -> token", token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;