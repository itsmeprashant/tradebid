import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Product/>
      </div>
    </div>
  );
}

export default App;
