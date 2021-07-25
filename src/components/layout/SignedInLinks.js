import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
const SignedInLinks = (props) => {

  const { cart, signOut, id, addToCart, deleteFromCart } = props;
  const cartnum = Object.keys(cart).length;
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>Add new food</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/cart' >
        <span class='badge badge-warning' id='lblCartCount'><i class="fa" >&#xf07a;</i> {cartnum} </span>
        </NavLink></li>
        <li><NavLink to='/profile' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

export default compose(
  firestoreConnect(props => {
    return [{
      collection: "users",
      doc: `${props.id}`,
      subcollections: [{ collection: "cart" }],
      storeAs: `${props.ui}-cart`
    }];
  }),
  connect(({ firestore }, props) => {

    return {
      cart: firestore.ordered[`${props.ui}-cart`] || []
    };
  })
)(SignedInLinks);

