import React from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Signin_Signup_page from './pages/SignIn-Signup-Page';
import { auth, createUserProfileDcument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  unSubscribe = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) { 
        const userRef = await createUserProfileDcument(userAuth)
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      } else {
        setCurrentUser({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
      return (
        <BrowserRouter>
          <Provider store={store}>
            <Header/>
            <div className="app">
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={Signin_Signup_page} />
            </div>
          </Provider>
        </BrowserRouter>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
