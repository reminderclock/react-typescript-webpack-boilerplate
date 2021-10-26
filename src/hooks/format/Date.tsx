import { Delimter, TInputValue } from "../../types/inferface";

export const setDate = (
  data: TInputValue,
  isInput: boolean,
  delimiter: Delimter,
  inputValue: TInputValue
) => {
  return isInput
    ? getChangeDate(data, delimiter, inputValue)
    : getOutputDate(inputValue, delimiter);
};
export const isString = (x: TInputValue) => {
  return Object.prototype.toString.call(x) === "[object String]";
};
export const isDate = (date: string) => {
  const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
  return regex.test(date);
};
export const dateFormat = ["YYYY", "MM", "DD"];
const getOutputDate = (inputValue: TInputValue, delimiter: Delimter) => {
  return Array.isArray(inputValue)
    ? inputValue
        .map((e, index) => {
          if (index < 2 && e.length === dateFormat[index].length) e = e + "-";
          return e;
        })
        .join("")
    : inputValue;
};
const getChangeDate = (
  data: TInputValue,
  delimiter: Delimter,
  inputValue: TInputValue
) => {
  return data.toString().split("-");
};
