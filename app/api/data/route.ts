// data.ts
import axios from 'axios';

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
    { title: "First Order Discount", tag: "McDonald's East London", discount: "-20% OFF", image: "/assets/firstorder.svg" },
    { title: "Vegan Discount", tag: "McDonald's East London", discount: "-20% OFF", image: "/assets/vegan.svg" },
    { title: "Free ice Cream Offer", tag: "McDonald's East London", discount: "-100% OFF", image: "/assets/freeicecream.svg" },
  ]
} as const;

// Create a reusable Axios instance with default config
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to fetch data
export const fetchData = async () => {
  try {
    const response = await api.get('/posts?_limit=5');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      success: false, 
      error: 'Failed to fetch data',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Example function to post data
export const postData = async (data: any) => {
  try {
    const response = await api.post('/posts', data);
    return { 
      success: true, 
      data: response.data,
      message: 'Data created successfully' 
    };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      success: false, 
      error: 'Failed to create data',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
