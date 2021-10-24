import { InputState, thousandSeparator } from "../types/inferface";

export enum ActionType {
  thousandSeparator = "thousandSeparator",
}

export type InputActions = thousandSeparator;
export const InputFormatReducer = (state: InputState, action: InputActions) => {
  switch (action.displayType) {
    case ActionType.thousandSeparator:
      return {
        ...state,
        inputValue: setThousandSeparator(action.payload, action.isInput),
      };
  }
};
const setThousandSeparator = (data: string | number, isInput: boolean) => {
  if (isInput) {
    const strNum = data.toString().replaceAll(/,/g, "");
    if (!isNaN(Number(strNum)) && !strNum.includes("e")) return strNum;
    return data;
  } else return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
