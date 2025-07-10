import { useState } from 'react'

import './App.css';
import Product from './components/Product';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    </>
  )
}

export default App
