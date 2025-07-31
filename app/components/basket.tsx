import React from "react";
import {
  Trash2,
  Trash,
  TrashIcon,
  ArrowDown,
  ArrowRightCircle,
  Truck,
  Store,
  XCircle,
} from "lucide-react";

const Basket = () => {
  return (
    <div className="w-[370px] bg-white rounded-xl border p-4 shadow-md space-y-4">
   
      <div className="bg-orange-500 text-white rounded-lg p-4 flex items-center space-x-3">
        <div className="text-xl">🕒</div>
        <div className="font-semibold">Open until 3:00 AM</div>
      </div>

   
      <div className="bg-green-700 text-white rounded-lg p-4 font-bold text-lg flex items-center space-x-2">
        <div className="text-xl">🛒</div>
        <span>My Basket</span>
      </div>

    
      <div className="space-y-4">
       
        <BasketItem
          qty={1}
          title='12" Vegitarian Pizza'
          desc="No Mushrooms + green peppers"
          price="£27.90"
          icon={<Trash2 className="w-5 h-5" />}
        />

   
        <BasketItem
          qty={1}
          title='17" Tandoori Pizza'
          desc="No Mushrooms + green peppers"
          price="£17.90"
          icon={<Trash className="w-5 h-5" />}
        />


        <BasketItem
          qty={2}
          title="Coke Coca Cola"
          desc=""
          price="£4.90"
          icon={<TrashIcon className="w-5 h-5 text-red-600" />}
        />

   
        <BasketItem
          qty={1}
          title='12" Vegitarian Pizza'
          desc="No Mushrooms + green peppers"
          price="£27.90"
          icon={<XCircle className="w-5 h-5 text-purple-400" />}
        />
      </div>


      <div className="space-y-1 text-[15px] font-medium">
        <div className="flex justify-between">
          <span>Sub Total:</span>
          <span>£127.90</span>
        </div>
        <div className="flex justify-between">
          <span>Discounts:</span>
          <span className="text-red-500">-3.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee:</span>
          <span>2.50</span>
        </div>
      </div>


      <div className="bg-orange-500 rounded-lg text-white text-[18px] font-bold p-4 flex justify-between">
        <span>Total to pay</span>
        <span>£127.90</span>
      </div>

 
      <div className="space-y-3">
        <button className="w-full flex justify-between items-center px-4 py-3 border rounded-xl text-gray-700">
          Choose your free item..
          <ArrowDown className="w-4 h-4" />
        </button>

        <button className="w-full flex justify-between items-center px-4 py-3 border rounded-xl text-gray-700">
          Apply Coupon Code here
          <ArrowRightCircle className="w-4 h-4 text-green-600" />
        </button>
      </div>


      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="flex flex-col items-center border rounded-xl p-2 bg-green-100">
          <Truck className="w-5 h-5 text-green-700" />
          <span className="text-sm font-semibold">Delivery</span>
          <span className="text-xs text-gray-600">Starts at 17:50</span>
        </div>
        <div className="flex flex-col items-center border rounded-xl p-2 text-gray-400">
          <Store className="w-5 h-5" />
          <span className="text-sm font-semibold">Collection</span>
          <span className="text-xs">Starts at 16:50</span>
        </div>
      </div>


      <button className="w-full bg-green-700 text-white text-lg py-3 rounded-xl flex items-center justify-center gap-2">
        <ArrowRightCircle className="w-5 h-5" />
        Checkout!
      </button>
    </div>
  );
};

const BasketItem = ({
  qty,
  title,
  desc,
  price,
  icon,
}: {
  qty: number;
  title: string;
  desc?: string;
  price: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between items-start border-b pb-3">
      <div className="flex space-x-3">
        <div className="bg-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
          {qty}x
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          {desc && <div className="text-sm text-gray-500">{desc}</div>}
        </div>
      </div>
      <div className="flex flex-col items-end space-y-1">
        <div className="text-sm font-medium">{price}</div>
        <button>{icon}</button>
      </div>
    </div>
  );
};

export default Basket;
