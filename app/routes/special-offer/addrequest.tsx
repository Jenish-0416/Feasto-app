"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogTrigger, DialogContent } from "~/components/ui/dialog";
import { useFlow } from "~/lib/flow-context";

const AddRequest = () => {
  const { currentStep, openDelivery, closeAll } = useFlow();

  const handleAdd = () => {
    openDelivery();
  };

  const isOpen = currentStep === "addrequest";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeAll()}>
      <DialogContent className="w-full max-w-[720px] p-0 overflow-hidden">
        <div className="bg-white h-[620px] rounded-[8px] overflow-hidden shadow-lg relative flex flex-col">
          {/* Top Banner Image */}
          <div className="relative w-full h-[200px]">
            <img
              src="/assests/pop-pop1.svg"
              alt="Pizza banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col px-6 py-6 flex-1 justify-between">
            <div className="text-[14px] text-black font-normal mb-2">
              <span className="font-bold">Special Offers</span> &gt;{" "}
              <span className="font-bold">Meal Deal 1</span> &gt;{" "}
              <span className="font-bold">Customise Pizza 1</span> &gt;{" "}
              <span className="font-bold">Instructions</span>
            </div>

           
            <h2 className="text-[18px] font-popi text-black mb-4">
              Customise your chicken Pizza
            </h2>

           
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/assests/poppizza2.svg"
                alt="Pizza icon"
                className="w-16 h-16 rounded-full border border-gray-300"
              />
              <div className="h-12 w-px bg-gray-300"></div>
              <p className="text-[#F28A1E] text-[20px] font-extrabold">
                Add your special request
              </p>
            </div>

           
            <div className="mb-6">
              <textarea
                rows={6}
                placeholder="Write your special instructions here..."
                className="w-full resize-none border border-gray-300 rounded-xl p-4 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <p className="text-xs text-gray-600 mt-4 mb-1.5 px-8">
              Delivery & Tax will be calculated in the next step
            </p>

           
            <div className="mt-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
               
                <div className="flex flex-col">
                  <button className="bg-[#F28A1E] text-white text-sm font-semibold px-6 py-2 rounded-md">
                    <span className="text-white opacity-90">Total to pay </span>
                    <span className="text-lg font-bold">£127.90</span>
                  </button>
                </div>

               
                <div className="flex items-center gap-4">
                  <button
                    onClick={closeAll}
                    className="underline text-sm text-black font-semibold"
                  >
                    Take me back
                  </button>
                  <button
                    onClick={handleAdd}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2"
                  >
                    <span className="bg-white text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                      →
                    </span>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRequest;
