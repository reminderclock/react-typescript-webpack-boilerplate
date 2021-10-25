import { ActionType } from "../hooks/InputFormatReducer";

export interface InputState {
  inputValue: InputValue | string;
}

export interface thousandSeparator {
  displayType: ActionType.thousandSeparator;
  payload: InputValue;
  isInput: boolean;
}

export interface date {
  displayType: ActionType.date;
  payload: string | number;
  isInput: boolean;
  delimiter: Delimter;
}

export type Delimter = string;
export type InputValue = string | number | string[];
