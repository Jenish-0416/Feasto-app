"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Dialog } from "@headlessui/react";
import { useFlow } from "~/lib/flow-context";

const Deliverypop = () => {
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState<"default" | "invalid" | "valid">(
    "default"
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { currentStep, closeAll } = useFlow();

  const handleFind = () => {
    const isValidPincode = /^\d{6}$/.test(postcode);
    if (isValidPincode) {
      setStatus("valid");
      setIsDialogOpen(true);
    } else {
      setStatus("invalid");
    }
  };

  const renderLeftImage = () => {
    switch (status) {
      case "invalid":
        return (
          <img
            src="public/assests/delivery2.png"
            alt="Invalid"
            className="object-cover w-full h-full"
          />
        );
      case "valid":
        return (
          <img
            src="public/assests/delivery3.png"
            alt="Valid"
            className="object-cover w-full h-full"
          />
        );
      default:
        return (
          <img
            src="public/assests/delivery1.png"
            alt="Default"
            className="object-cover w-full h-full"
          />
        );
    }
  };

  const renderHeading = () => {
    if (status === "valid") {
      return (
        <h2 className="text-[28px] font-extrabold text-[#070E2C] leading-tight mb-2">
          You're All Set! <br />
          <span className="underline text-green-600">Post Code</span> Submitted
        </h2>
      );
    }

    return (
      <h2 className="text-[28px] font-extrabold text-[#070E2C] leading-tight mb-2">
        Please Enter Your <br />
        <span
          className={`underline ${status === "invalid" ? "text-red-600" : ""}`}
        >
          Post Code
        </span>
      </h2>
    );
  };

  const renderMessage = () => {
    if (status === "invalid") {
      return (
        <p className="text-red-600 font-semibold mt-2">
          Sorry, we don't do delivery to your area.
        </p>
      );
    }
    if (status === "valid") {
      return (
        <p className="text-green-600 font-semibold mt-2">
          We deliver to your area.
        </p>
      );
    }
    return null;
  };

  const isOpen = currentStep === "delivery";

  if (!isOpen) return null;

  return (
    <>
      {/* Main Popup */}
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl flex w-[900px] h-[550px] overflow-hidden relative">
          {/* Close Button for Main Popup */}
          <button
            className="absolute top-4 right-4 bg-[#070E2C] text-white rounded-full p-2 z-10"
            onClick={closeAll}
          >
            <IoClose size={24} />
          </button>

          {/* Left Image */}
          <div className="w-[45%] bg-gray-200 h-full">{renderLeftImage()}</div>

          {/* Right Content */}
          <div className="w-[55%] p-10 relative flex flex-col justify-center">
            {/* Orange Divider Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F28A1E]" />

            <div className="relative z-10">
              {renderHeading()}

              <p className="text-[#070E2C] text-[14px] mb-4">
                To start placing delivery order, please enter your full postcode
                here
              </p>

              {/* Input and Button */}
              <div className="flex w-full rounded-full overflow-hidden mb-3">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="eg. 560001"
                  className="flex-1 px-5 py-3 bg-[#F2F2F2] text-[16px] text-black focus:outline-none"
                />
                <button
                  onClick={handleFind}
                  className={`font-bold text-[18px] px-6 ${
                    status === "valid" ? "bg-[#070E2C]" : "bg-[#F28A1E]"
                  } text-white`}
                >
                  {status === "valid" ? "Change" : "Find"}
                </button>
              </div>

              {renderMessage()}

              {/* Divider + Collection Option */}
              <div className="flex items-center justify-between my-4">
                <div className="flex-1 h-px bg-orange-400"></div>
                <span className="mx-3 text-[#070E2C] font-semibold">or</span>
                <div className="flex-1 h-px bg-orange-400"></div>
              </div>

              <p className="text-[#070E2C] text-[14px] font-bold underline text-center">
                I want to come and collect
              </p>
              <img src="public/assests/mapmarker.svg" alt="Map" />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog for Success */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="relative z-[100]"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-xl relative">
            {/* Close Button inside Dialog */}
            <button
              className="absolute top-3 right-3 bg-gray-200 text-black p-1 rounded-full"
              onClick={() => {
                setIsDialogOpen(false);
                closeAll();
              }}
            >
              <IoClose size={20} />
            </button>

            <Dialog.Title className="text-lg font-bold text-[#070E2C]">
              Delivery Confirmed!
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 mt-2">
              We deliver to your area. Continue to explore the menu and place
              your order.
            </Dialog.Description>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-[#F28A1E] text-white px-4 py-2 rounded-md font-semibold"
                onClick={() => {
                  setIsDialogOpen(false);
                  closeAll();
                }}
              >
                Okay
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Deliverypop;
