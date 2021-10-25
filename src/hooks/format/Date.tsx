import { Delimter, InputValue } from "../../types/inferface";

export const setDate = (
  data: InputValue,
  isInput: boolean,
  delimiter: Delimter,
  inputValue: InputValue
) => {
  return isInput
    ? getChangeDate(data, delimiter, inputValue)
    : getOutputDate(data, delimiter);
};
export const isString = (x: InputValue) => {
  return Object.prototype.toString.call(x) === "[object String]";
};
const dateFormat = ["YYYY", "MM", "DD"];
const getOutputDate = (data: InputValue, delimiter: Delimter) => {
  return data;
};
const getChangeDate = (
  data: InputValue,
  delimiter: Delimter,
  inputValue: InputValue
) => {
  return data;
};
