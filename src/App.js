import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';


import './pages/homepage/homepage.styles.scss';



class App extends React.Component {
constructor(){
  super();

    this.state = {
      currentUser: null
    }
}

componentDidMount(){
  auth.onAuthStateChanged(async user => {
    createUserProfileDocument(user)

  })
}


  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}>

        </Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
