import { Delimter, InputValue } from "../../types/inferface";

export const setDate = (
  data: InputValue,
  isInput: boolean,
  delimiter: Delimter,
  inputValue: InputValue
) => {
  return isInput
    ? getChangeDate(data, delimiter, inputValue)
    : getOutputDate(inputValue, delimiter);
};
export const isString = (x: InputValue) => {
  return Object.prototype.toString.call(x) === "[object String]";
};
const dateFormat = ["YYYY", "MM", "DD"];
const getOutputDate = (inputValue: InputValue, delimiter: Delimter) => {
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
  data: InputValue,
  delimiter: Delimter,
  inputValue: InputValue
) => {
  return data.toString().split("-");
};
