import React from 'react';
import './App.css';
import Listing from './components/Listing';
import data from './data/etsy.json';

function App() {
  console.log(data)
  return (
    
    <Listing items={data}  />
  );
}

export default App;

