import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Book from './pages/Book';
import Author from './pages/Author';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
     <h1> <img src="https://i.pinimg.com/474x/6f/f1/52/6ff152ecb91982c89c5250639900ffd8.jpg" alt="" />BookVault library</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
     </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/author/:id" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
