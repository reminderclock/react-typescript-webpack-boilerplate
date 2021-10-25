import styled from "styled-components";
import InputFormat from "./common/InputFormat";

const App = () => {
  return (
    <AppWrapper>
      <InputFormat
        type="text"
        displayType="thousandSeparator"
        placeholder="세자리"
        value={"1234142"}
      />
      <InputFormat
        type="text"
        displayType="date"
        delimiter="-"
        placeholder="yy-mm-dd"
        value={["2020", "1", "11"]}
      />
    </AppWrapper>
  );
};

const AppWrapper = styled.div``;

export default App;
