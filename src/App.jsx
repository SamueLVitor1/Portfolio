import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/global/globalStyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/themes/lightTheme"
import { darkTheme } from "./styles/themes/darkTheme"
import { useState } from "react"
import { ContainerIntroductory } from "./components/ContainerIntroductory"
import { AboutMe } from "./components/AboutMe"
import { MyTechnologies } from "./components/MyTechnologies"
import { MyProjects } from "./components/MyProjects"
import { Footer } from "./components/Footer"


export function App() {

  const [theme, setTheme] = useState('lightTheme')

  function changeTheme(valor) {
    valor === 'lightTheme' ? setTheme('lightTheme') : setTheme('darkTheme')
  }

  return (
    <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
      <Header
        changeTheme={changeTheme}
        themePresent={theme}
      />
      <ContainerIntroductory />
      <AboutMe />
      <MyTechnologies />
      <GlobalStyles />
      <MyProjects />
      <Footer />
    </ThemeProvider>
  )
}


