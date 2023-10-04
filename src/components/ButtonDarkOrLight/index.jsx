import { MoonStars, SunDim } from "phosphor-react";
import { ButtonContainer } from "./style";

export function ButtonDarkOrLight({ isThemePresent, changeTheme }) {
  return (

    <ButtonContainer onClick={() => {
      changeTheme(isThemePresent === 'lightTheme' ? 'darkTheme' : 'lightTheme');
      console.log("dentro do header: " + isThemePresent)
    }}>

      {isThemePresent === 'darkTheme' ?
        <SunDim size={26} weight="bold" style={{ color: '#fff' }} /> :
        <MoonStars size={26} weight="bold" />
      }
    </ButtonContainer>
  )
}