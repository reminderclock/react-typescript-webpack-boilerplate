import { InputValue } from "../../types/inferface";

export const setThousandSeparator = (
  data: InputValue,
  isInput: boolean,
  inputValue: InputValue
) => {
  if (Array.isArray(data)) return data;
  return isInput
    ? getStrNum(data, inputValue)
    : getThousandSeparatorFormat(inputValue);
};
export const getThousandSeparatorFormat = (inputValue: InputValue) => {
  return inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const getStrNum = (data: string | number, inputValue: InputValue) => {
  console.log(inputValue);
  const strNum = data.toString().replaceAll(/,/g, "");
  return isStrNum(strNum) ? strNum : inputValue;
};
export const isStrNum = (str: string) => {
  return !isNaN(Number(str)) && !str.includes("e") ? true : false;
};
