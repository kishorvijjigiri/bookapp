import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const { bookId } = useParams();
  const [customerName, setCustomerName] = useState('');
  const [message, setMessage] = useState('');

  const placeOrder = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/bookapp/order`, {
      bookId: bookId,
      customerName: customerName
    })
      .then(res => {
        setMessage(res.data.message + ` (Order ID: ${res.data.orderId})`);
      })
      .catch(err => {
        setMessage("Error placing order. Please try again.");
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📦 Place Order for Book ID: {bookId}</h2>
      <form onSubmit={placeOrder}>
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          style={{ padding: 8, marginBottom: 10, width: '100%' }}
        />
        <br />
        <button type="submit">Place Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default OrderForm;
