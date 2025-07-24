import { Hero } from "~/routes/landing-page/comonents/hero";
import FoodCardGrid from "~/routes/landing-page/comonents/cardcus";
import CategoryCards from "~/routes/landing-page/comonents/typefood";
import Adver from "~/routes/landing-page/comonents/adver";
import Withus from "~/routes/landing-page/comonents/withus";
import About from "~/routes/landing-page/comonents/about";
import Statesoverview from "~/routes/landing-page/comonents/statesoverview";
import Footer from "~/components/footer";
import Brands from "~/routes/landing-page/comonents/brands";
// import HeardStatic from "../routes/landig-page/components/heardstatic"; // Removed broken import
export default function LandingPage() {
  return (
    <>
      {/* <Heardstatic /> */}
      <Hero />
      <FoodCardGrid />
      <CategoryCards />
      <Brands />
      <br />
      <Adver />
      <Withus />
      <About />
      <br />
      <Statesoverview />
      <br />
    </>
  );
}
