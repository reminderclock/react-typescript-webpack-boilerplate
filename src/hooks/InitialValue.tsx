import { InputValue } from "../types/inferface";
import { isString } from "./format/Date";
import { getStrNum, isStrNum } from "./format/ThousandSeparator";

export const getValidNumeral = (value: InputValue, displayType: any) => {
  switch (displayType) {
    case "thousandSeparator":
      if (Array.isArray(value) || !isStrNum(value.toString()))
        throw new Error(
          `displayType:${displayType} 의 value Format은 숫자로만 구성된 문자, 숫자 입니다.`
        );
      else return getStrNum(value, "");
    case "date":
      if (!Array.isArray(value) || value.length > 3)
        throw new Error(
          `displayType:${displayType} 의 value Format은 ['YYYY'-'MM'-'DD']입니다.`
        );
      return value;
    default:
      alert("유효 하지 않은 displayType입니다");
      return "";
  }
};
