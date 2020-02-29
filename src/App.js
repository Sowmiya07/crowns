import React from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
