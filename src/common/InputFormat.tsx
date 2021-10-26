import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { InputFormatReducer } from "../hooks/InputFormatReducer";
import { IInputFormat, InputState } from "../types/inferface";
import { getValidNumeral } from "../hooks/InitialValue";

const InputFormat = (props: IInputFormat) => {
  const { value, placeholder, type, delimiter } = props;
  const formatProperty = Object.keys(props).filter((e) => props[e] === true)[0];
  const dataInitialState: InputState = {
    inputValue: getValidNumeral(value, formatProperty),
    formatType: formatProperty,
  };
  const [state, dispath] = useReducer(InputFormatReducer, dataInitialState);
  const { inputValue, formatType } = state;
  const handleChange = (event: any) => {
    let inputValue = event.target.value;
    dispath({
      displayType: formatType,
      payload: inputValue,
      isInput: true,
      delimiter: delimiter,
    });
  };
  useEffect(() => {
    dispath({
      displayType: formatType,
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
