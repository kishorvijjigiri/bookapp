
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
