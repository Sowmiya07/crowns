import React from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Signin_Signup_page from './pages/SignIn-Signup-Page';
import {auth} from './firebase/firebase.utils';

import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribe = null

  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
      return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <div className="app">
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Signin_Signup_page} />
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
