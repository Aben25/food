import React from 'react'
import FoodSummary from './FoodSummary'
import { Link } from 'react-router-dom'

const FoodList = ({foods, deleteFood}) => {
  return (
    <div className="food-list section">
      { foods && foods.map(food => {
        return (
            <FoodSummary food={food}
            deleteFood={deleteFood}/>
         
        )
      })}  
    </div>
  )
}

export default FoodList
