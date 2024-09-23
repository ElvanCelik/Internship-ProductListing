import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'; 
import ProductDetailPage from './ProductDetailPage'; 
import './styles/App.css';

function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
