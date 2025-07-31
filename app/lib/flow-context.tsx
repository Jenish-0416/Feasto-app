"use client";

import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface FlowContextType {
  currentStep:
    | "checkout"
    | "mealdeal"
    | "customization"
    | "addrequest"
    | "delivery"
    | null;
  openMealDeal: () => void;
  openCustomization: () => void;
  openAddRequest: () => void;
  openDelivery: () => void;
  closeAll: () => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const useFlow = () => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
};

interface FlowProviderProps {
  children: ReactNode;
}

export const FlowProvider: React.FC<FlowProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<
    "checkout" | "mealdeal" | "customization" | "addrequest" | "delivery" | null
  >(null);

  const openMealDeal = () => setCurrentStep("mealdeal");
  const openCustomization = () => setCurrentStep("customization");
  const openAddRequest = () => setCurrentStep("addrequest");
  const openDelivery = () => setCurrentStep("delivery");
  const closeAll = () => setCurrentStep(null);

  const value: FlowContextType = {
    currentStep,
    openMealDeal,
    openCustomization,
    openAddRequest,
    openDelivery,
    closeAll,
  };

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
};
