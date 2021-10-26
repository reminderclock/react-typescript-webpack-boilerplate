import {
  date,
  InputState,
  thousandSeparator,
  TInputValue,
} from "../types/inferface";
import { setDate } from "./format/Date";
import { setThousandSeparator } from "./format/ThousandSeparator";

export enum ActionType {
  thousandSeparator = "thousandSeparator",
  date = "date",
}
export type InputActions = thousandSeparator | date;
export const InputFormatReducer = (state: InputState, action: InputActions) => {
  switch (action.displayType) {
    case "thousandSeparator":
      return {
        ...state,
        inputValue: setThousandSeparator(
          action.payload,
          action.isInput,
          state.inputValue
        ),
      };
    case "date":
      return {
        ...state,
        inputValue: setDate(
          action.payload,
          action.isInput,
          action.delimiter,
          state.inputValue
        ),
      };
    default:
      return state;
  }
};
const isArray = (data: TInputValue) => {
  return Array.isArray(data);
};
