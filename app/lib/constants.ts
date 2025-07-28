// Food category cards data and types
export interface FoodCategoryCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const cards: FoodCategoryCard[] = [
  {
    image: "/assests/burger.png",
    alt: "Burger",
    title: "Burgers & Fast food",
    description: "21 Restaurants",
  },
  {
    image: "/assests/salad.png",
    alt: "Salad",
    title: "Salads",
    description: "31 Restaurants",
  },
  {
    image: "/assests/pasta.png",
    alt: "Pasta",
    title: "Pasta & Casuals",
    description: "4 Restaurants",
  },
  {
    image: "/assests/pizza.png",
    alt: "Pizza",
    title: "Pizzas",
    description: "32 Restaurants",
  },
  {
    image: "/assests/breakfast.png",
    alt: "Breakfast",
    title: "Breakfast",
    description: "3 Restaurants",
  },
  {
    image: "/assests/soup.png",
    alt: "Soup",
    title: "Soups",
    description: "32 Restaurants",
  },
];

export const categories = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

// Food items for menu navigation and cardcus
export interface FoodItem {
  image: string;
  discount: string;
  title: string;
  tag: string;
}
export const foodItems: FoodItem[] = [
  {
    image: "public/assests/food1.png",
    discount: "-40%",
    title: "Chef Burgers London",
    tag: "Restaurant",
  },
  {
    image: "public/assests/food2.png",
    discount: "-20%",
    title: "Grand Ai Cafe London",
    tag: "Restaurant",
  },
  {
    image: "public/assests/food3.png",
    discount: "-17%",
    title: "Butterbrot Caf’e London",
    tag: "Restaurant",
  },
];

// Food items for menunav
export const menuNavFoodItems = [
  {
    title: "First Order Discount",
    tag: "McDonald’s East London",
    discount: "-20% OFF",
    image: "public/assests/firstorder.svg",
  },
  {
    title: "Vegan Discount",
    tag: "McDonald’s East London",
    discount: "-20% OFF",
    image: "public/assests/vegan.svg",
  },
  {
    title: "Free ice Cream Offer",
    tag: "McDonald’s East London",
    discount: "-100% OFF",
    image: "public/assests/freeicecream.svg",
  },
];

// Fries
export interface FryItem {
  title: string;
  description: string;
  price: string;
  image: string;
}
export const fries: FryItem[] = [
  {
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "public/assests/fries1.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/fries2.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/fries3.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/fries4.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/fries5.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/fries6.svg",
  },
];

// Customer reviews
export interface Review {
  name: string;
  location: string;
  date: string;
  review: string;
  avatar: string;
}
export const reviews: Review[] = [
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
];

// Drinks
export interface DrinkItem {
  title: string;
  description: string;
  price: string;
  image: string;
}
export const drinks: DrinkItem[] = [
  {
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "public/assests/drink1.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/drink2.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/drink3.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/drink4.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/drink5.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "public/assests/drink6.svg",
  },
];

// Menu items
export const menuItems = [
  "Pizzas",
  "Garlic Bread",
  "Calzone",
  "Kebabs",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

// Burgers
export interface BurgerItem {
  title: string;
  description: string;
  price: string;
  image: string;
}
export const burgers: BurgerItem[] = [
  {
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "/assests/burger1.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger2.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger3.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drink",
    price: "GBP 23.10",
    image: "/assests/burger4.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drink",
    price: "GBP 23.10",
    image: "/assests/burger5.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger6.svg",
  },
];

// Brand cards (from brands.tsx)
export interface BrandCard {
  image: string;
  alt: string;
  title: string;
  button: string;
  badgeColor: string;
}
export const brandCards: BrandCard[] = [
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

export interface PizzaItem {
  title: string;
  description: string;
  image: string;
}

export const pizzaItems: PizzaItem[] = [
  {
    title: "Farm House Xtreme Pizza",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    image: "public/assests/orderpizza1.svg",
  },
  {
    title: "Tandoori Deluxe Pizza",
    description:
      "Spicy chicken tikka, onion, green pepper, tandoori sauce, and mozzarella cheese",
    image: "public/assests/orderpizza3.svg",
  },
  {
    title: "Veggie Overload Pizza",
    description:
      "Mushrooms, olives, sweetcorn, jalapeños, capsicum, and mozzarella cheese",
    image: "public/assests/orderpizza33.svg",
  },
]; 