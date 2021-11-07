import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    overflow-y: scroll;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
    color:inherit;
}
body {
    width:100%;
    height:100%;
}
button {
    font-size: 20px;
    border:0;
    outline: 0;
    background-color: transparent;
}
table {
    border-collapse:collapse;
}
`;
export default GlobalStyle;
