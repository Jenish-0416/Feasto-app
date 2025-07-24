import React from "react";
import Cardcus from "~/routes/landing-page/comonents/brands";
import Burger from "~/routes/restaurants-page/components/burger";
import Drinks from "~/routes/restaurants-page/components/colddrink";
import CustomerReview from "~/routes/ordering-page/components/customerreview";
import Fries from "~/routes/restaurants-page/components/fries";
import Information from "~/routes/ordering-page/components/imformation";
import MapCard from "~/routes/ordering-page/components/mapcard";
import MenuNav from "~/routes/restaurants-page/components/menunav";
import SecondHeader from "~/routes/restaurants-page/components/secondheader";

export default function Page() {
  return (
    <div>
      <SecondHeader />
      <MenuNav />
      <Burger />
      <Fries />
      <Drinks />
      <Information />
      <br />
      <MapCard />
      <br />
      <CustomerReview />
      <Cardcus />
    </div>
  );
}
