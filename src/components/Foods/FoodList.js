import React, { useState, useEffect } from 'react';
import FoodSummary from './FoodSummary'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'


const FoodList = ({ cart, foods, deleteFood }) => {




  

  useEffect(() => {
    // Good!
    console.log('this is from food list', cart)
  }, []);
  return (
    
    <div className="food-list section">
       
      {foods && foods.map(food => {
        return (
          <FoodSummary cart={cart} food={food}
            deleteFood={deleteFood} />
        )
      })}
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
)(FoodList);
