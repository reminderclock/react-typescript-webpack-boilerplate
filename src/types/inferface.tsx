import { ActionType } from "../hooks/InputFormatReducer";

export interface IInputFormat {
  [key: string]: any;
  thousandSeparator?: boolean;
  date?: boolean;
  type: string;
  delimiter?: string;
  value: TInputValue;
  dateForMat?: string[];
  placeholder?: string;
}
export interface InputState {
  inputValue: TInputValue | string;
  formatType: any;
}

export interface thousandSeparator {
  displayType: ActionType.thousandSeparator;
  payload: TInputValue;
  isInput: boolean;
}

export interface date {
  displayType: ActionType.date;
  payload: string | number;
  isInput: boolean;
  delimiter: Delimter;
}

export type Delimter = string;
export type TInputValue = ThousandSeparatorType | DateType;
export type DateType = string[];
export type ThousandSeparatorType = string | number;
