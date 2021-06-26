import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    color:white;
    font-style: normal;
    font-weight: bold;
    
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, sans-serif;
  }
  
  body::-webkit-scrollbar {
    width: 5px;
  background: transparent; 
    border-radius: 50%;
}
  ::-webkit-scrollbar-thumb {
  background-color: black;
  outline: 44px solid slategrey;
}
 
`;

export default GlobalStyles;
