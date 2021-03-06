import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

html::-webkit-scrollbar {
  width: 1rem;
}

html::-webkit-scrollbar-track {
  background: #fff;
}

html::-webkit-scrollbar-thumb {
  background: #10221b;
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
    scroll-padding-top: 7rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
`;

export default GlobalStyles;
