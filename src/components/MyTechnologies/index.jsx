import { Flag } from "phosphor-react";
import { ContainerTechnologies } from "./style";

export function MyTechnologies() {
  return (
    <ContainerTechnologies>
      <h2>Tecnologias e Ferramentas</h2>

      <div>
        <p>
          <Flag size={24} weight="bold" />
          HTML <span>(8 meses)</span>
        </p>
        <p>
          <Flag size={24} weight="bold" />
          CSS <span>(8 meses)</span>
        </p>
        <p>
          <Flag size={24} weight="bold" />
          JavaScript <span>(7 meses)</span>
        </p>

        <p>
          <Flag size={24} weight="bold" />
          Git e GitHub <span>(7 meses)</span>
        </p>

        <p>
          <Flag size={24} weight="bold" />
            React <span>(3 meses)</span>
        </p>

        <p>
          <Flag size={24} weight="bold" />
            StyledComponents <span>(3 meses)</span>
        </p>

      </div>
    </ContainerTechnologies>
  )
}