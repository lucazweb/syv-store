import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 

  html {  
    box-sizing: border-box;
    font-size: 16px;
    background: #E2E8F0;
    font-family: sans-serif;
  }
      
  *, *:before, *:after {
    box-sizing: inherit;
  }
      
  body,h1,h2,h3,h4,h5,h6,p,ol,ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  .custom-scroll {
    overflow-y: scroll;
    height: 75vh;
  }

  .custom-scroll::-webkit-scrollbar {
    width: 0.5em;
  }

  .custom-scroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    background-color: #6F42C1;
    outline: 0px solid slategrey;
    border-radius: 10px;
  }
      
  ol,ul {
    list-style: none;
  }
      
  img {
    max-width: 100%;
    height: auto;
  }
`
