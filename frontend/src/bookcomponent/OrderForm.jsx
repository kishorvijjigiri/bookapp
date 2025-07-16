import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderForm() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (customerName.trim() !== "") {
      setStep(2);
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/bookapp/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId, customerName }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        alert(data.message);
        setStep(3); // Move to message & navigation step
        setCustomerName("");
      })
      .catch((err) => console.error("Order error:", err));
  };

  const handleGoBack = () => {
    navigate("/"); // Go back to BookList
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {message && (
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "10px",
            marginBottom: "1rem",
            color: "#155724",
            border: "1px solid #c3e6cb",
            borderRadius: "5px",
            width: "50%",
            margin: "0 auto",
          }}
        >
          {message}
        </div>
      )}

      <h2>Order Book ID: {bookId}</h2>

      {step === 1 && (
        <form onSubmit={handleNameSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", margin: "10px" }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOrderSubmit}>
          <p>Click below to confirm your order.</p>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </form>
      )}

      {step === 3 && (
        <button
          onClick={handleGoBack}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#343a40",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Book List
        </button>
      )}
    </div>
  );
}

export default OrderForm;
