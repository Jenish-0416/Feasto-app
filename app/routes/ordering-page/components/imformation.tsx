import { Truck, Phone, Clock } from "lucide-react";

export default function Information() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  bg-white  border-2 rounded-xl overflow-hidden shadow-2xl text-[18px]">
      
      <div className="bg-white px-14 py-10 space-y-5">
        <div className="flex items-center gap-3 text-[#0A1026] font-bold text-[24px]">
       <img src="public/assests/Tracking.svg" alt="" />
          Delivery information
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-bold">Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Sunday:</span> 8:00 AM–12:00 AM
          </p>
          <p>
            <span className="font-bold">Estimated time until delivery:</span> 20 min
          </p>
        </div>
      </div>

    
      <div className="bg-white px-10 py-10 space-y-5">
        <div className="flex items-center gap-3 text-[#0A1026] font-bold text-[24px]">
        <img src="public/assests/ID Verified.svg" alt="" />
          Contact information
        </div>

        <p className="text-[#2E2E2E]">
          If you have allergies or other dietary <br /> restrictions, please contact the restaurant.
          The <br/>  restaurant will provide food-specific <br /> information upon request.
        </p>

        <div className="space-y-3">
          <div>
            <p className="font-bold">Phone number</p>
            <p className="text-blue-600 font-semibold">+934443-43703</p>
          </div>
          <div>
            <p className="font-bold">Website</p>
            <p className="text-blue-600 font-semibold">http://mcdonalds.uk/</p>
          </div>
        </div>
      </div>

  
      <div className="bg-[#0A1026] px-10 py-10 rounded-2xl text-white space-y-5">
        <div className="flex items-center gap-3 font-bold text-[24px]">
        <img src="public/assests/Clock.svg" alt="" />
          Operational Times
        </div>

        <div className="space-y-2 text-[18px]">
          <p>
            <span className="font-bold">Monday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Tuesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Wednesday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Thursday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Friday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Saturday:</span> 8:00 AM–3:00 AM
          </p>
          <p>
            <span className="font-bold">Sunday:</span> 8:00 AM–3:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}
