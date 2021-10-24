import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { InputFormatReducer } from "../hooks/InputFormatReducer";
import { InputState } from "../types/inferface";

interface IInputFormat {
  type: string;
  value: number | string;
  displayType: any;
  placeholder?: string;
}

const InputFormat = ({ value, displayType, placeholder }: IInputFormat) => {
  const dataInitialState: InputState = {
    inputValue: value,
  };
  const [state, dispath] = useReducer(InputFormatReducer, dataInitialState);
  const { inputValue } = state;
  const handleChange = (event: any) => {
    let inputValue = event.target.value;
    dispath({ displayType: displayType, payload: inputValue, isInput: true });
  };
  useEffect(() => {
    dispath({ displayType: displayType, payload: inputValue, isInput: false });
  }, [inputValue]);
  return (
    <InputFormatWrapper
      onChange={handleChange}
      value={inputValue}
      placeholder={placeholder}
    ></InputFormatWrapper>
  );
};

const InputFormatWrapper = styled.input``;

export default InputFormat;
