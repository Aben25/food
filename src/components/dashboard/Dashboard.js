import React, { Component } from 'react'
import FoodList from '../Foods/FoodList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteFood } from '../../store/actions/foodActions'

class Dashboard extends Component {

  render() {  
    // console.log(this.props);
    const { foods, deleteFood} = this.props;
    
    return (
      
      <div className="dashboard container">
        <div className="row">
          <div className="col-8">
            <FoodList foods={foods}
              deleteFood={deleteFood}/>
          </div>
          <div className="col-4">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    foods: state.firestore.ordered.foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFood: (id) =>dispatch(deleteFood(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'foods' }
  ])
)(Dashboard)
