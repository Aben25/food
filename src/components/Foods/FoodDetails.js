import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Button } from 'react-bootstrap';


const FoodDetails = (props) => {
  const { food } = props;
  if (food) {
    return (
      <div className="container section food-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{food.title}</span>
            <p>{food.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {food.authorFirstName} {food.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading food...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const foods = state.firestore.data.foods;
  const food = foods ? foods[id] : null
  return {
    food: food
  }
}




export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'foods'
  }])
)(FoodDetails)
