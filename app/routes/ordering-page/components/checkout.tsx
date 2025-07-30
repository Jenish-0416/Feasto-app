"use client";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { PiShoppingCartBold } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { api } from "~/lib/utils";
import { useFlow } from "~/lib/flow-context";
import { Link } from "react-router";

type CardItem = {
  id: string;
  discount?: string;
  title: string;
  tag?: string;
  description?: string;
  price: string;
  image: string;
  label: string;
  qty: number;
  icon?: string;
  desc?: string;
  name?: string;
};

const PizzaCard = ({
  id,
  title,
  description,
  image,
  price,
  label,
}: CardItem) => {
  const [sizes, setSizes] = useState<CardItem[]>([]);
  const [selectedSize, setSelectedSize] = useState("Small");

  const getFoodCard = async () => {
    try {
      const res = await api.get("/sizes");
      setSizes(res.data);
    } catch (err) {
      console.error("Failed to fetch sizes", err);
    }
  };

  useEffect(() => {
    getFoodCard();
  }, []);

  const addToBasket = async (size: CardItem) => {
    try {
      const basketItem = {
        id: `${id}-${size.id}`,
        title,
        price: size.price,
        image,
        label: size.label,
        qty: 1,
        name: `${title} (${size.label})`,
        desc: description,
      };
      await api.post("/basketItems", basketItem);
    } catch (err) {
      console.error("Failed to add to basket", err);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between gap-4 mb-6">
      <div >
        <div className="flex justify-between items-start gap-4">
          <div>
            
          </div>
      <div className="flex-1">
          {/* LEFT: Title + Description */}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <div className="mb-4 flex gap-1">
              {["🌶️", "🌶️", "🌶️", "🌶️‍", "🌶️‍"].map((pepper, i) => (
                <span
                  key={i}
                  className={i < 3 ? "text-red-600" : "text-gray-400"}
                >
                  {pepper}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
          </div>

          {/* RIGHT: Image (small on small screens, big on md+) */}
          <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shrink-0">
            <img
              src={image}
              alt="Pizza"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Size Options */}
        <div className="flex flex-wrap gap-3 mt-2 mb-2 text-[14px]">
          {sizes.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedSize(item.label);
                addToBasket(item);
              }}
              className={`flex items-center justify-between px-2 py-3 rounded-lg border cursor-pointer transition ${
                selectedSize === item.label
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300"
              } ${
                item.label === "XL Large with Sauces"
                  ? "w-[250px] sm:w-[400px]"
                  : "w-[150px] sm:w-[250px]"
              }`}
            >
              <span className="font-semibold">{item.label}</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FoodCardGrid = () => {
  return (
    <div className="pt-0">
      <div className="flex flex-col gap-4 px-2 pb-4">
        <div className="relative rounded-lg overflow-hidden shadow-md group w-full h-[200px]">
          <div
            className="absolute bg-[#0A1026] text-white text-xs font-bold z-10 flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
              top: "1px",
              left: "10px",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            -20%
          </div>
          <img
            src="/assests/girl.svg"
            alt="First Order Discount"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end px-4 pb-3 z-10">
            <span className="text-[#FC8A06] text-xs font-medium mb-1">
              Special Offer
            </span>
            <h2 className="text-white text-sm font-bold leading-tight">
              First Order Discount
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState<{ id: string; name: string }[]>(
    []
  );

  const getMenuItems = async () => {
    try {
      const res = await api.get("/menuItem");
      setMenuItems(res.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className="w-full md:w-64 bg-white border rounded-lg overflow-y-auto mb-4 md:mb-0">
      <div className="flex items-center gap-2 p-6 text-lg font-bold">
        <img src="/assests/Restaurant Menu.svg" alt="menu icon" />
        <span>Menu</span>
      </div>
      <ul className="space-y-2 mb-6">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`px-6 py-4 text-sm font-bold cursor-pointer ${
              item.name === "Pizzas"
                ? "bg-[#0C0C0C] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Checkout = () => {
  const [basketItems, setBasketItems] = useState<CardItem[]>([]);
  const { openMealDeal } = useFlow();

  const getBasketItems = async () => {
    try {
      const res = await api.get("/basketItems");
      setBasketItems(res.data);
    } catch (err) {
      console.error("Failed to fetch basket items", err);
    }
  };

  const deleteBasketItem = async (id: string) => {
    try {
      await api.delete(`/basketItems/${id}`);
      setBasketItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to delete basket item", err);
    }
  };

  useEffect(() => {
    getBasketItems();
  }, []);

  const calculateSubtotal = () => {
    return basketItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("£", ""));
        return total + price * item.qty;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    openMealDeal();
  };

  return (
    <div className="w-full md:w-[280px] bg-white rounded-b-xl shadow-lg overflow-hidden mt-4 md:mt-0">
      <div className="flex flex-col gap-5">
        <div className="bg-[#FF8000] text-white text-sm py-5 px-4 font-semibold rounded-lg flex items-center gap-2">
          <span className="text-2xl">🕒</span> Open until 3:00 AM
        </div>
        <div className="bg-green-700 text-white px-4 py-5 flex items-center rounded-t-lg gap-3 text-xl font-bold">
          <PiShoppingCartBold className="text-2xl" /> My Basket
        </div>
      </div>
      <div className="divide-y px-1 bg-center">
        {basketItems.map((item) => (
          <div key={item.id} className="flex justify-between px-3 items-center">
            <div className="flex items-center justify-center gap-3 py-3">
              <div className="w-24 h-9 bg-[#FC8A06] text-white text-sm font-bold rounded-full flex items-center justify-center">
                {item.qty}x
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-green-700 font-bold">{item.price}</div>
                <div className="font-bold text-sm">{item.name}</div>
                {item.desc && (
                  <div className="text-xs text-gray-500">{item.desc}</div>
                )}
              </div>
            </div>
            <button onClick={() => deleteBasketItem(item.id)}>
              <FiTrash2 className="text-red-500" />
            </button>
          </div>
        ))}
        <div className="text-sm flex flex-col px-3 gap-3 py-3">
          <div className="flex justify-between font-bold">
            <span>Sub Total:</span> <span>£{calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span className="font-semibold">Discounts:</span>{" "}
            <span>-£3.00</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span className="font-semibold">Delivery Fee:</span>{" "}
            <span>£2.50</span>
          </div>
        </div>
        <div className="mt-3 bg-[#FC8A06CC] text-white font-bold py-2 px-4 text-center rounded">
          Total to pay{" "}
          <span className="text-2xl">
            £{(parseFloat(calculateSubtotal()) - 3.0 + 2.5).toFixed(2)}
          </span>
        </div>
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between border rounded-full px-3 py-2">
            <span className="text-sm text-gray-500">
              Choose your free item..
            </span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center justify-between border rounded-full px-3 py-2">
            <input
              className="w-full outline-none text-sm"
              placeholder="Apply Coupon Code here"
            />
            <IoIosArrowForward className="text-green-500" />
          </div>
        </div>
        <div className="flex justify-between pt-4 gap-2">
          <div className="border rounded-lg flex flex-col items-center justify-center p-3 text-xs w-1/2">
            <MdOutlineDeliveryDining className="text-2xl text-green-700" />
            <div className="font-bold">Delivery</div>
            <div className="text-gray-400">Starts at 17:50</div>
          </div>
          <div className="border rounded-lg flex flex-col items-center justify-center p-3 text-xs w-1/2">
            <TbShoppingBagCheck className="text-2xl text-green-700" />
            <div className="font-bold text-gray-500">Collection</div>
            <div className="text-gray-400">Starts at 16:50</div>
          </div>
        </div>
        <Link to="/special-offer">
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-green-700 text-white py-3 rounded text-lg font-bold flex items-center justify-center gap-2 "
          >
            <IoIosArrowForward /> Checkout!
          </button>
        </Link>
      </div>
    </div>
  );
};

const MainPage = () => {
  const [pizzaItems, setPizzaItems] = useState<CardItem[]>([]);

  const getPizzaItems = async () => {
    try {
      const res = await api.get("/pizzaItems");
      setPizzaItems(res.data);
    } catch (err) {
      console.error("Failed to fetch pizza items", err);
    }
  };

  useEffect(() => {
    getPizzaItems();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-[#f7f7f7] min-h-screen p-4 md:p-6">
      <div className="hidden lg:block">
        <Menu />
      </div>
      <div className="flex-1 lg:px-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Pizzas</h1>
          <button className="border px-3 py-2 rounded-lg flex items-center gap-1 text-sm shadow-sm">
            Sort by Pricing <IoIosArrowDown />
          </button>
        </div>
        {pizzaItems.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>
      <Checkout />
    </div>
  );
};

export default MainPage;
