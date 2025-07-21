import { Hero } from "~/components/hero";
import FoodCardGrid from "~/components/cardcus";
import CategoryCards from "~/components/typefood";
import Adver from "~/components/adver";
import Withus from "~/components/withus";
import About from "~/components/about";
import Statesoverview from "~/components/statesoverview";
import Footer from "~/components/footer";
import Brands from "~/components/brands";
// import HeardStatic from "../routes/landig-page/components/heardstatic"; // Removed broken import
export default function LandingPage() {
  return (
    <>
      {/* <Heardstatic /> */}
      <Hero />
      <FoodCardGrid />
      <CategoryCards />
      <Brands />
      <br/>
      <Adver />
      <Withus />
      <About />
      <br />
      <Statesoverview />
      <br />
    </>
  );
}
