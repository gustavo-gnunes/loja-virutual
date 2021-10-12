import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --blue: #4169e1;
    --lightBlue: #6495ed;
    --grey11: #1c1c1c;
    --lightGrey: #d3d3d3;
    --silver: #c0c0c0;
  }

  body {
    background: var(--lightGrey);
    color: #000;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }
  @media(max-width: 970px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }
  @media(max-width:700px) {
    :root {
      font-size: 75%; /* 12px */
    }
    .main {
      display: block;
    }
  }
  @media(max-width: 590px) {
    :root {
      font-size: 62.25%; /* 10px */
    }
  }
`;