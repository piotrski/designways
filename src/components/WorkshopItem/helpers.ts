import { Workshop } from "../../types";

export const formatPriceWithCurrency = (event: Workshop) => {
  if (event.cost > 0) {
    return `${event.cost.toFixed(2).replace(/\./g, ",")} zł`;
  }
  return "Darmowe";
};

export const formatDuration = (event: Workshop) => {
  const duration = event.duration.split(":");
  return `${duration[0]} h ${duration[1]} min`;
};

export {};
