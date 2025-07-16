import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/bookapp/books`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📚 Book List</h2>
      {books.map(book => (
        <div key={book.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          marginBottom: '10px'
        }}>
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <button onClick={() => navigate(`/order/${book.id}`)}>Order</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
