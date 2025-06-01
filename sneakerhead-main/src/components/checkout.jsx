import React from 'react';
import './check.css'; // Make sure the path is correct

function Check() {
  return (
    <>
    <div style={{marginTop:'100px',height:'1000px'}}>
    <div className='box1'>
      <div className="frame">
        <h1>Checkout</h1>
        <h3>Contact Information</h3>
        <div className="contacts">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="contacts2">
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="contacts3">
          <input type="text" placeholder="Address" />
          <input type="number" placeholder="Postal Code" />
        </div>
        <div className="contacts4">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Country" />
        </div>
        <div className="payment">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="credit" /> Credit Card
            </label>
            <label>
              <input type="radio" name="payment" value="paypal" /> PayPal
            </label>
            <label>
              <input type="radio" name="payment" value="bank" /> Bank Transfer
            </label>
          </div>
          <div className="payment-details">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Expiration Date (MM/YY)" />
            <input type="number" placeholder="CVV" />
          </div>
        </div>
      </div>
    </div>
    <div className='box2'>

    </div>
    </div>
    </>
  );
}

export default Check;
