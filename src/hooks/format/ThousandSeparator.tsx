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
//1
// numstr to string,,,
export const getThousandSeparatorFormat = (inputValue: InputValue) => {
  return inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//2 string,,,, to numstr
export const getStrNum = (data: string | number, inputValue: InputValue) => {
  const strNum = data.toString().replaceAll(/,/g, "");
  return isStrNum(strNum) ? strNum : inputValue;
};
export const isStrNum = (str: string) => {
  return !isNaN(Number(str)) && !str.includes("e") ? true : false;
};
