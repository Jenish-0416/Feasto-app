import React, { useState } from "react";
import {
  fries,
  drinks,
  reviews,
  burgers,
  menuItems,
  brandCards,
} from "../../../lib/constants";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Frequent Questions");

  const tabs = [
    "Frequent Questions",
    "Who we are?",
    "Partner Program",
    "Help & Support",
  ];

  return (
    <div className="bg-[#F6F6F6] rounded-2xl mx-4 md:mx-8 lg:mx-16 xl:mx-[1027] p-6 md:p-8 lg:p-12 xl:p-30 flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-8 md:mb-14">
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold text-black">
            Know more about us!
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 text-sm md:text-base lg:text-[20px] font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 md:py-3 px-3 md:px-4 rounded-full transition-all duration-200 text-xs md:text-sm lg:text-[16px]
                  ${
                    activeTab === tab
                      ? "border-2 border-[#FC8A06] text-black font-extrabold"
                      : "text-black font-medium hover:font-semibold"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Frequent Questions" && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm text-center text-sm md:text-[16px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6 text-sm md:text-[16px] flex flex-col justify-center items-center font-bold text-[#1E1E1E]">
                <div className="bg-[#FC8A06] w-full max-w-[346px] h-12 md:h-[62px] rounded-full text-black px-4 py-3 md:py-5 font-bold text-sm md:text-base">
                  How does Order.UK work?
                </div>
                <div className="text-sm md:text-base">
                  What payment methods are accepted?
                </div>
                <div className="text-sm md:text-base">
                  Can I track my order in real-time?
                </div>
                <div className="text-sm md:text-base">
                  Are there any special discounts or
                  <br /> promotions available?
                </div>
                <div className="text-sm md:text-base">
                  Is Order.UK available in my area?
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-[#F5F5F5] rounded-xl p-4 md:p-6">
                    <h3 className="font-extrabold text-sm md:text-[18px] mb-2">
                      Place an Order!
                    </h3>
                    <img
                      src="public/assests/icon1.png"
                      alt="Place order"
                      className="mx-auto mb-4 w-20 h-20 md:w-26 md:h-26"
                    />
                    <p className="text-xs md:text-[13px]">
                      Place order through our website or Mobile app
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] rounded-xl p-4 md:p-6">
                    <h3 className="font-extrabold text-sm md:text-[18px] mb-2">
                      Track Progress
                    </h3>
                    <img
                      src="public/assests/icon2.png"
                      alt="Track progress"
                      className="mx-auto mb-4 w-20 h-20 md:w-26 md:h-26"
                    />
                    <p className="text-xs md:text-[13px]">
                      You can track your order status with delivery time
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] rounded-xl p-4 md:p-6">
                    <h3 className="font-extrabold text-sm md:text-[18px] mb-2">
                      Get your Order!
                    </h3>
                    <img
                      src="public/assests/icon3.png"
                      alt="Get your order"
                      className="mx-auto mb-4 w-20 h-20 md:w-26 md:h-26"
                    />
                    <p className="text-xs md:text-[13px]">
                      Receive your order at a lightning fast speed!
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs md:text-[14px] text-center text-[#333] max-w-lg">
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
