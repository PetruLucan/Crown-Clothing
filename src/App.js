import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import { setCurrenUser } from './redux/user/user.actions';

import './pages/homepage/homepage.styles.scss';



class App extends React.Component {


  componentDidMount() {
    const { setCurrenUser } = this.props;

    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrenUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrenUser(userAuth);
      }

    });
  }


  render() {
    return (
      <div>
        <Header> </Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
            }>
            </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrenUser: user => dispatch(setCurrenUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
