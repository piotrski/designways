import { Workshop } from "../../types";

export const formatPriceWithCurrency = (props) => {
  if (props > 0) {
    return `${props.toFixed(2).replace(/\./g, ",")} zł`;
  }
  return "Darmowe";
};

export const formatDuration = (props) => {
  if (typeof props === "string") {
    const duration = props.split(":");
    return `${duration[0]} h ${duration[1]} min`;
  }
};

export {};
