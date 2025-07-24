import React, { useState } from "react";
import {
  fries,
  drinks,
  reviews,
  burgers,
  menuItems,
  brandCards,
} from "../lib/constants";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Frequent Questions");

  const tabs = [
    "Frequent Questions",
    "Who we are?",
    "Partner Program",
    "Help & Support",
  ];

  return (
    <div className="bg-[#F6F6F6] rounded-2xl mx-[1027] p-30 flex flex-col justify-center items-center">
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14">
          <h2 className="text-[32px] top-[3510px] bottom-[238px] font-bold   text-black  ">
            Know more about us!
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-6 text-[20px] font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` py-3 px-4 rounded-full transition-all duration-200 text-[16px]
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
          <div className="bg-white rounded-xl p-6 shadow-sm text-center text-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap- text[16px]">
              <div className="space-y-6 text-[16px] flex flex-col justify-center items-center font-bold text-[#1E1E1E]">
                <div className="bg-[#FC8A06] w-[346px] h-[62px] rounded-full text-black px-4 py-5 font-bold ">
                  How does Order.UK work?
                </div>
                <div>What payment methods are accepted?</div>
                <div>Can I track my order in real-time?</div>
                <div>
                  Are there any special discounts or
                  <br /> promotions available?
                </div>
                <div>Is Order.UK available in my area?</div>
              </div>

              <div className=" flex flex-col justify-center items-center text-center">
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-[#F5F5F5] rounded-xl p-6">
                    <h3 className="font-extrabold text-[18px] mb-2">
                      Place an Order!
                    </h3>
                    <img
                      src="public/assests/icon1.png"
                      alt="Place order"
                      className="mx-auto mb-4 w-  26 h-26"
                    />
                    <p className=" text-[13px] ">
                      Place order through our website or Mobile app
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] rounded-xl p-6">
                    <h3 className="font-extrabold text-[18px] mb-2">
                      Track Progress
                    </h3>
                    <img
                      src="public/assests/icon2.png"
                      alt="Track progress"
                      className="mx-auto mb-4 w-26 h-26"
                    />
                    <p className="text-[13px]">
                      You can track your order status with delivery time
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] rounded-xl p-6">
                    <h3 className="font-extrabold text-[18px] mb-2">
                      Get your Order!
                    </h3>
                    <img
                      src="public/assests/icon3.png"
                      alt="Get your order"
                      className="mx-auto mb-4 w-26 h-26"
                    />
                    <p className="text-[13px]">
                      Receive your order at a lightning fast speed!
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-[14px] text-center text-[#333] max-w-lg ">
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
