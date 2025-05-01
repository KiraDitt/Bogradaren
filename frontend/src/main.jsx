import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyBooks from './pages/MyBooks';
import Search from './pages/Search';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/my-books" element={<MyBooks />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

