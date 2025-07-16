import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './bookcomponent/BookList';
import OrderForm from './bookcomponent/OrderForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/order/:bookId" element={<OrderForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
