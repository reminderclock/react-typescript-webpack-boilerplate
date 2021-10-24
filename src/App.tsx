import styled from "styled-components";
import InputFormat from "./common/InputFormat";

const App = () => {
  return (
    <AppWrapper>
      <InputFormat
        type="text"
        displayType="thousandSeparator"
        placeholder="세자리"
        value="1231321"
      />
    </AppWrapper>
  );
};

const AppWrapper = styled.div``;

export default App;
