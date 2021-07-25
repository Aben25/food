import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment'
import { connect } from 'react-redux'
import { addToCart } from "../../store/actions/foodActions";

const FoodSummary = ({ cart, food, addToCart }) => {

  useEffect(() => {
    // Good!
  }, []);

   
  const handleCart = () => {

    var found = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === `${food.title}`) {
        found = true;
        break;
      }
    }
    console.log('cart', cart);

    console.log('found', food.title, found);
    addToCart(food, food.id)
  }
  return (

    <div class="col m6">
      <div class="product-content product-wrap clearfix">
        <div class="row">
          <div class="col m6 col-sm-12 col-xs-12">
            <div class="product-image">
              <img width="100%" height="100%" src={food.url} alt="194x228" class="img-responsive" />
              <span class="tag2 hot">
                HOT
              </span>
            </div>
          </div>
          <div class="col m6 s12 col-xs-12">
            <div class="product-deatil">
              <h5 class="name">
                <a href="#">
                  {food.title} <span><h5>{food.title}</h5></span>
                </a>
              </h5>
              <p class="price-container">
                <span>${food.price}</span>
              </p>
              <span class="tag1"></span>
            </div>
            <div class="description">
              <p>{food.content} </p>
            </div>
            <div class="product-info smart-form">
              <div class="row">
                <div class="col m6 s6 xs6">
                  <a onClick={() => handleCart()} class="btn ">Add to cart</a>
                </div>
                <div class="col m6 s6 sx6">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (food, id) => dispatch(addToCart(food, id))
  }
}


export default connect(null, mapDispatchToProps)(FoodSummary)
