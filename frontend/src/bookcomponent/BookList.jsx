import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/bookapp/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched books:", data);
        setBooks(data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>📚 Book List</h2>
      <div className="book-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button
              className="buy-button"
              onClick={() => navigate(`/order/${book.id}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
