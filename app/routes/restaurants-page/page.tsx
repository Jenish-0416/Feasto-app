import React from "react";
import Cardcus from "~/components/brands";
import Burger from "~/components/burger";
import Drinks from "~/components/colddrink";
import CustomerReview from "~/components/customerreview";
import Fries from "~/components/fries";
import Information from "~/components/imformation";
import MapCard from "~/components/mapcard";
import MenuNav from "~/components/menunav";
import SecondHeader from "~/components/secondheader";

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
