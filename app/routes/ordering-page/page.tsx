import React from "react";
import Cardcus from "~/routes/landing-page/comonents/brands";
import Checkout from "~/routes/ordering-page/components/checkout";
import CustomerReviews from "~/routes/ordering-page/components/customerreview";
import Information from "~/routes/ordering-page/components/imformation";
import MapCard from "~/routes/ordering-page/components/mapcard";
import OrderHero from "~/routes/ordering-page/components/orderhero";

export default function page() {
  return (
    <div>
      <OrderHero /> <br />
      <Checkout /> <br />
      <Information />
      <br />
      <MapCard /> <br />
      <CustomerReviews />
      <br />
      <Cardcus />
      
    </div>
  );
}
