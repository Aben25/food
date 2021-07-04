import React from 'react'
import { NavLink } from 'react-router-dom'
import { signIn } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
  const { signIn } = props;
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }

}

export default SignedInLinks
