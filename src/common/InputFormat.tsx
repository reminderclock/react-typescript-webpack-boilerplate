import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { InputFormatReducer } from "../hooks/InputFormatReducer";
import { InputState } from "../types/inferface";
import { getValidNumeral } from "../hooks/InitialValue";

interface IInputFormat {
  type: string;
  delimiter?: string;
  value: number | string | string[];
  displayType: any;
  dateForMat?: string[];
  placeholder?: string;
}

const InputFormat = ({
  value,
  displayType,
  placeholder,
  type,
  delimiter,
}: IInputFormat) => {
  const dataInitialState: InputState = {
    inputValue: getValidNumeral(value, displayType),
  };
  const [state, dispath] = useReducer(InputFormatReducer, dataInitialState);
  const { inputValue } = state;
  const handleChange = (event: any) => {
    let inputValue = event.target.value;
    dispath({
      displayType: displayType,
      payload: inputValue,
      isInput: true,
      delimiter: delimiter,
    });
  };
  useEffect(() => {
    dispath({
      displayType: displayType,
      payload: inputValue,
      isInput: false,
      delimiter: delimiter,
    });
  }, [inputValue]);
  return (
    <InputFormatWrapper
      type={type}
      onChange={handleChange}
      value={inputValue}
      placeholder={placeholder}
    ></InputFormatWrapper>
  );
};

const InputFormatWrapper = styled.input``;

export default InputFormat;
