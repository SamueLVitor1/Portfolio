import { useState } from "react";
import { ContainerMenuHamburguer } from "./styles";
import { List, X } from "phosphor-react";
import { ButtonDarkOrLight } from "../../ButtonDarkOrLight";


export function MenuHamburguer({ themePresent, changeTheme }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <ContainerMenuHamburguer>
      {
        openMenu === false ?
          <button onClick={() => setOpenMenu(true)}>
            <List size={28} weight="bold" className="buttonIcon" />
          </button>
          :
          <div className="menuOpen">
            <button onClick={() => setOpenMenu(false)}>
              <X size={28} weight="bold" className="buttonIcon" />
            </button>

            <div>
              <p><a href="#sobreMim">Sobre</a></p>
              <p><a href="#containerProjects">Projetos </a></p>
              <p>about</p>
            </div>

            <ButtonDarkOrLight
                isThemePresent={themePresent}
                changeTheme={changeTheme}
            />

          </div>

      }


      {/* <div>
        
        <ul>
          <li>about</li>
          <li>eu</li>
          <li>eu</li>
        </ul>
      </div> */}



    </ContainerMenuHamburguer>
  )
} 