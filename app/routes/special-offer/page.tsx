import React from 'react'
import MealDeal from './mealdeal'
import MealCustomization from './mealcustomization'
import AddRequest from './addrequest'
import Deliverypop from './deliverypop'

export default function page() {
  return (
    <div>
      <MealDeal/>
      <MealCustomization/>
      <AddRequest/>
      <Deliverypop/>
    </div>
  )
}
