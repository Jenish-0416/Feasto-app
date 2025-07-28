// mockData.ts
export type Card = { image: string; alt: string; title: string; description: string };
export type FoodItem = { image: string; discount: string; title: string; tag: string };
export type MenuNavFoodItem = { title: string; tag: string; discount: string; image: string };
export type FryDrinkBurger = { title: string; description: string; price: string; image: string };
export type Review = { name: string; location: string; date: string; review: string; avatar: string };
export type BrandCard = { image: string; alt: string; title: string; button: string; badgeColor: string };
export type PizzaItem = { title: string; description: string; image: string };

export const mockData = {
  cards: [
    { image: "/assets/burger.png", alt: "Burger", title: "Burgers & Fast food", description: "21 Restaurants" },
    { image: "/assets/salad.png", alt: "Salad", title: "Salads", description: "31 Restaurants" },
    { image: "/assets/pasta.png", alt: "Pasta", title: "Pasta & Casuals", description: "4 Restaurants" },
    { image: "/assets/pizza.png", alt: "Pizza", title: "Pizzas", description: "32 Restaurants" },
    { image: "/assets/breakfast.png", alt: "Breakfast", title: "Breakfast", description: "3 Restaurants" },
    { image: "/assets/soup.png", alt: "Soup", title: "Soups", description: "32 Restaurants" },
  ],
  categories: [
    "Offers", "Burgers", "Fries", "Snacks", "Salads",
    "Cold drinks", "Happy Meal®", "Desserts", "Hot drinks", "Sauces", "Orbit®"
  ],
  foodItems: [
    { image: "/assets/food1.png", discount: "-40%", title: "Chef Burgers London", tag: "Restaurant" },
    { image: "/assets/food2.png", discount: "-20%", title: "Grand Ai Cafe London", tag: "Restaurant" },
    { image: "/assets/food3.png", discount: "-17%", title: "Butterbrot Café London", tag: "Restaurant" },
  ],
  menuNavFoodItems: [
    { title: "First Order Discount", tag: "McDonald’s East London", discount: "-20% OFF", image: "/assets/firstorder.svg" },
    { title: "Vegan Discount", tag: "McDonald’s East London", discount: "-20% OFF", image: "/assets/vegan.svg" },
    { title: "Free ice Cream Offer", tag: "McDonald’s East London", discount: "-100% OFF", image: "/assets/freeicecream.svg" },
  ],
  fries: [
    { title: "Royal Cheese Burger with extra Fries", description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium", price: "GBP 23.10", image: "/assets/fries1.svg" },
    { title: "The classics for 3", description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks", price: "GBP 23.10", image: "/assets/fries2.svg" },
  ],
  drinks: [
    { title: "Royal Cheese Burger with extra Fries", description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium", price: "GBP 23.10", image: "/assets/drink1.svg" },
  ],
  reviews: [
    { name: "St Glx", location: "South London", date: "24th September, 2023", review: "The positive aspect was undoubtedly the efficiency of the service...", avatar: "/assets/reviewdp.svg" },
  ],
  burgers: [
    { title: "Royal Cheese Burger with extra Fries", description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium", price: "GBP 23.10", image: "/assets/burger1.svg" },
  ],
  brandCards: [
    { image: "/assets/mcd.png", alt: "Delicious dish 1", title: "McDonald’s London", button: "Order Now", badgeColor: "bg-[#0A1026] text-white" },
  ],
  pizzaItems: [
    { title: "Farm House Xtreme Pizza", description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger...", image: "/assets/orderpizza1.svg" },
  ],
};
