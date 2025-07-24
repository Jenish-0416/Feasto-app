import { Card, CardTitle, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const cards = [
  {
    image: "public/assests/mcd.png",
    alt: "Delicious dish 1",
    title: "McDonald’s London ",
    button: "Order Now",
    badgeColor: "bg-[#0A1026] text-white",
  },
  {
    image: "public/assests/papajohns.png",
    alt: "Delicious dish 2",
    title: "Papa Johns",

    button: "Order Now",
    badgeColor: "bg-red-700 text-white",
  },
  {
    image: "public/assests/kfc.png",
    alt: "Delicious dish 3",
    title: "KFC West London",

    button: "Order Now",
    badgeColor: "bg-green-700 text-white",
  },
  {
    image: "public/assests/texas.png",
    alt: "Delicious dish 3",
    title: "Texas Chicken",

    button: "Order Now",
    badgeColor: "bg-green-700 text-white",
  },
  {
    image: "public/assests/burgerking.png",
    alt: "Delicious dish 3",
    title: "Burger King",

    button: "Order Now",
    badgeColor: "bg-green-700 text-white",
  },
  {
    image: "public/assests/shaurma.png",
    alt: "Delicious dish 3",
    title: "Shaurma 1",
    button: "Order Now",
    badgeColor: "bg-green-700 text-white",
  },
];

export default function Cardcus() {
  return (
    <div className=" mt-[56px] mb-[51px]">
      <h2
        className="font-bold mb-4"
        style={{
          width: "338px",
          height: "56px",
          transform: "rotate(0deg)",
          opacity: 1,
          top: "0px",
          left: "0px",
          fontSize: "32px",
        }}
      >
        Popular Restaurants
      </h2>
      <div className="flex flex-wrap justify-start gap-4">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className="shadow-lg bg-[#FC8A06] relative overflow-hidden"
            style={{
              width: "238px",
              height: "266px",
              transform: "rotate(0deg)",
              opacity: 1,
              borderRadius: "12px",
            }}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="object-cover"
              style={{
                width: "238px",
                height: "203px",
                transform: "rotate(0deg)",
                opacity: 1,
                top: "1884px",
                left: "100px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <CardContent className="p-2 flex flex-col gap-2 bg-[#FC8A06] flex items-center justify-center">
              <CardTitle
                className="font-bold text-white text-center"
                style={{
                  width: "182px",
                  height: "27px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                  top: "2105px",
                  left: "128px",
                }}
              >
                {card.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
