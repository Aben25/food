import React, { Component } from 'react'
import FoodList from '../Foods/FoodList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteFood } from '../../store/actions/foodActions'
import { Redirect } from 'react-router-dom'
import Cart from './Cart'


class Dashboard extends Component {
  state = {
    search: ''

  }
  finder = (e) => {
    this.setState({ search: e.target.value });
  }


  render() {
    const { foods, deleteFood, auth, addToCart } = this.props;
    console.log('Dashborad', auth.uid);

    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <div className="container">
          <div className="row">

            <FoodList foods={foods}
              deleteFood={deleteFood} />
          </div>
        </div>
        <footer class="page-footer font-small cyan darken-3">

          <div class="container-fluid center">

            <div class="row">

              <div class="col-md-12 py-5">
                <div class="mb-5 flex-center">

                  <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="gplus-ic">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a class="pin-ic">
                    <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>

            </div>
          </div>


          <div class="footer-copyright center py-2">   © 2021 Copyright
          </div>

        </footer>

      </div>
    )
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

const mapDispatchToProps = dispatch => {
  return {
    deleteFood: (id) => dispatch(deleteFood(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'foods' }
  ])
)(Dashboard)

