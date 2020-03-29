import React from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Signin_Signup_page from './pages/SignIn-Signup-Page';
import { auth, createUserProfileDcument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import {selectCurrentUser} from './redux/user/user.selector';

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
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  // eslint-disable-next-line react/jsx-pascal-case
                  <Signin_Signup_page />
                )
              }
            />
          </Switch>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
