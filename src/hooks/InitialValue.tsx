import { InputValue } from "../types/inferface";
import { isString } from "./format/Date";
import { getStrNum } from "./format/ThousandSeparator";

export const getValidNumeral = (value: InputValue, displayType: any) => {
  switch (displayType) {
    case "thousandSeparator":
      if (Array.isArray(value)) return value;
      return getStrNum(value, "");
    case "date":
      return Array.isArray(value) ? getInitDate(value) : "";
    default:
      alert("유효 하지 않은 displayType입니다");
      return "";
  }
};

const getInitDate = (value: string[]) => {
  return value.length > 3 ? value.slice(0, 3) : value;
};
