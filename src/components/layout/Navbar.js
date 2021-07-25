import React from 'react'
import { Link } from 'react-router-dom'
import authReducer from '../../store/reducers/authReducer'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <div>
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="page-caption">
                <h1 class="page-title">Next Meal</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-section">
        <div class="container">
          <div class="card-block main_1  mb30">
            <div class="row main_1 ">
              <div  class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 main_1 ">
                <nav className="nav-wrapper grey darken-3">
                  <div className="container">
                    <Link to='/' className="brand-logo">Home</Link>
                    {links}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}




export default connect(mapStateToProps)(Navbar)