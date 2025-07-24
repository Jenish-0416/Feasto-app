import React from 'react'
import Cardcus from '~/components/brands'
import Checkout from '~/components/checkout'
import CustomerReviews from '~/components/customerreview'
import Information from '~/components/imformation'
import MapCard from '~/components/mapcard'
import OrderHero from '~/components/orderhero'

export default function page() {
  return (
    <div>
      <OrderHero /> <br />
       <Checkout />  <br />
      <Information /><br/ >
      <MapCard /> <br/>
      <CustomerReviews /><br />
      <Cardcus />
    </div>
  )
}
