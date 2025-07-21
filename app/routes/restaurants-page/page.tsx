import React from "react";
import Burger from "~/components/burger";
import Drinks from "~/components/colddrink";
import Fries from "~/components/fries";
import Information from "~/components/imformation";
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
    </div>
  );
}
