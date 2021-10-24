import { ActionType } from "../hooks/InputFormatReducer";

export interface InputState {
  inputValue: string | number;
}

export interface thousandSeparator {
  displayType: ActionType.thousandSeparator;
  payload: string | number;
  isInput: boolean;
}
