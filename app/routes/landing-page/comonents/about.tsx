import React from "react";

const steps = [
  {
    title: "Place an Order!",
    icon: "/public/assests/icon1.png",
    desc: "Place order through our website or Mobile app",
  },
  {
    title: "Track Progress",
    icon: "/public/assests/icon2.png",
    desc: "Your can track your order status with delivery time",
  },
  {
    title: "Get your Order!",
    icon: "/public/assests/icon3.png",
    desc: "Receive your order at a lighting fast speed!",
  },
];

export default function About() {
  return (
    <>
      {/* Mobile only layout */}
      <div className="md:hidden w-full flex flex-col items-center px-2 py-6 gap-4">
        <h2 className="text-2xl font-extrabold text-center mb-2">
          Know more about us!
        </h2>
        <button className="bg-[#FC8A06] text-black text-size-[18px] font-bold text-base rounded-full w-full max-w-xs py-3 mb-2">
          How does Order.UK work?
        </button>
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto mb-2">
          <div className="text-black text-size-[18px] font-extrabold text-center text-base">
            What payment methods are accepted?
          </div>
          <div className="text-black text-size-[18px] font-extrabold text-center text-base">
            Can I track my order in real-time?
          </div>
          <div className="text-black text-size-[18px] font-extrabold text-center text-base">
            Are there any special discounts or promotions available?
          </div>
          <div className="text-black text-size-[18px] font-extrabold text-center text-base">
            Is Order.UK available in my area?
          </div>
        </div>
        {/* Steps section */}
        <div className="w-full max-w-xs bg-[#0d1020] rounded-2xl px-2 py-6 flex flex-col items-center gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#ededed] rounded-xl flex flex-col gap-4 items-center px-4 py-4 w-[238px] h-[285px] mb-2"
            >
              <h3 className="font-extrabold text-[18px] text-base text-[#232323] mb-2 text-center">
                {step.title}
              </h3>
              <img
                src={step.icon}
                alt={step.title}
                className="w-[128px] h-[128px] lg:w-16 lg:h-16 mb-2"
              />
              <p className="text-[16px] text-[#232323] text-center">{step.desc}</p>
            </div>
          ))}
          <p className="text-[16px] px-1 text-white text-center mt-2">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
      {/* Desktop/Tablet: original layout (no tabs, just heading and content) */}
      <div className="hidden md:block">
        <div className="bg-[#F6F6F6] rounded-2xl mx-4 md:mx-8 lg:mx-16 xl:mx-[1027] p-6 md:p-8 lg:p-12 xl:p-30 flex flex-col justify-center items-center">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-8 md:mb-14">
              <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold text-black">
                Know more about us!
              </h2>
            </div>
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
                    Order.UK simplifies the food ordering process. Browse
                    through our diverse menu, select your favorite dishes, and
                    proceed to checkout. Your delicious meal will be on its way
                    to your doorstep in no time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
