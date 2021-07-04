import React from 'react'
import { Link } from 'react-router-dom'
import authReducer from '../../store/reducers/authReducer'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Next Meal</Link>
        {links}
      </div>
    </nav>
  )
  

}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Navbar);
