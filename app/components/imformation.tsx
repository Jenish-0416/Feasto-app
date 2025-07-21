import { FaClock, FaClipboardCheck, FaShippingFast } from "react-icons/fa";

export default function InfoSection() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10">
      {/* Delivery Information */}
      <div className="flex-1 bg-white p-8 space-y-4">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <FaShippingFast className="text-[#0a0a23]" />
          Delivery information
        </div>
        <div className="text-sm text-gray-800 space-y-1">
          <p><b>Monday:</b> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
          <p><b>Tuesday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Wednesday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Thursday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Friday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Saturday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Sunday:</b> 8:00 AM–12:00 AM</p>
          <p><b>Estimated time until delivery:</b> 20 min</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex-1 bg-white p-8 space-y-4 border-t md:border-t-0 md:border-l border-gray-200">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <FaClipboardCheck className="text-[#0a0a23]" />
          Contact information
        </div>
        <div className="text-sm text-gray-800 space-y-2">
          <p>
            If you have allergies or other dietary restrictions, please contact the restaurant.
            The restaurant will provide food-specific information upon request.
          </p>
          <p><b>Phone number</b><br />+934443-43</p>
          <p><b>Website</b><br /><a className="text-blue-700" href="http://mcdonalds.uk/">http://mcdonalds.uk/</a></p>
        </div>
      </div>

      {/* Operational Times */}
      <div className="flex-1 bg-[#0a0a23] text-white p-8 space-y-4 rounded-r-xl">
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaClock />
          Operational Times
        </div>
        <div className="text-sm space-y-1">
          <p><b>Monday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Tuesday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Wednesday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Thursday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Friday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Saturday:</b> 8:00 AM–3:00 AM</p>
          <p><b>Sunday:</b> 8:00 AM–3:00 AM</p>
        </div>
      </div>
    </div>
  );
}
