import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import FoodDetails from './components/Foods/FoodDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateFood from './components/Foods/CreateFood';
import Profile from './components/dashboard/Profile';
import Cart from './components/dashboard/Cart';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { deleteFood, deleteFromCart } from './store/actions/foodActions';
import SignedInLinks from './components/layout/SignedInLinks';
import { signOut } from './store/actions/authAction';


class App extends Component {
  render() {
    const { foods, signOut, deleteFood, auth, addToCart, deleteFromCart, profile } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/food/:id' component={FoodDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateFood} />
            <Route path='/create' component={CreateFood} />
            <Route path='/profile' render={() => <Profile deleteFood={deleteFood} foods={foods} profile={profile} id={auth.uid} />} />
            <Route path='/Cart' render={() => <Cart deleteFromCart={deleteFromCart} id={auth.uid} />} />
            <Route path='/signedInLinks' render={() => <SignedInLinks signOut={signOut} id={auth.uid} />} />
            <Cart />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    deleteFood: (id) => dispatch(deleteFood(id)),
    signOut: () => dispatch(signOut())

  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    foods: state.firestore.ordered.foods,
    auth: state.firebase.auth,
    profile: state.firebase.profile


  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'foods' }
  ])
)(App)
