import { TInputValue } from "../types/inferface";
import { dateFormat } from "./format/Date";
import { isStrNum } from "./format/ThousandSeparator";

export const getValidNumeral = (value: TInputValue, formatProperty: string) => {
  switch (formatProperty) {
    case "thousandSeparator":
      if (Array.isArray(value) || !isStrNum(value.toString()))
        throw new Error(
          `${formatProperty} 의 value Format은 숫자로만 구성된 문자, 숫자 입니다.`
        );
      // else return getStrNum(value, "");
      return value;
    case "date":
      if (!Array.isArray(value) || value.length > 3)
        throw new Error(
          `${formatProperty} 의 value Format은 ['YYYY'-'MM'-'DD']입니다.`
        );
      return value.map((e, index) => {
        if (e.length !== dateFormat[index].length)
          e = "0".repeat(dateFormat[index].length - e.length) + e;
        return e;
      });
    default:
      alert("유효 하지 않은 format입니다");
      return "";
  }
};
