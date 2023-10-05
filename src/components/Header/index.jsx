import { MoonStars, SunDim } from "phosphor-react";
import { ContainerHeader, NavList } from "./styles";
import { MenuHamburguer } from "./MenuHamburgue"; 
import { ButtonDarkOrLight } from "../ButtonDarkOrLight";

export function Header({ themePresent, changeTheme }) {

  return (
    <>
      <ContainerHeader>
        <h2>portfólio</h2>

        <NavList className="hidden">
          <ul>
            <li><a href="#sobreMim">Sobre</a></li>
            <li><a href="#containerProjects">Projetos </a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>

          <ButtonDarkOrLight isThemePresent={themePresent} changeTheme={changeTheme}/>
        </NavList>

        <MenuHamburguer themePresent={themePresent} changeTheme={changeTheme}/>
      </ContainerHeader>

     
    </>
  )
}