import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :root{
  font-size: 62.5%;
 }

 body{
  background: ${props => props.theme.pageBg};
 }

 html, body{
  font-size: 1.6rem;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
    font-weight: 400;
  } 

  button{
    cursor: pointer;
  }

  li{
    list-style: none;
  }

  a{
    color:${props => props.theme.primary};
    text-decoration: none;
  }
`