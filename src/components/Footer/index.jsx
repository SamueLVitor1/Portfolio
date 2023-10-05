import { EnvelopeSimple, LinkedinLogo } from "phosphor-react";
import { ContainerFooter } from "./styles";

export function Footer() {
  return (
    <ContainerFooter id="contato">
      <h2>Contatos</h2>

      <section>
        
        <div>
          <p>
            <EnvelopeSimple size={20} weight="bold" />
            <a href="mailto:samuelvitor.andrade1@gmail.com">
              samuelvitor.andrade1@gmail.com
            </a>
          </p>

          <p>
            <LinkedinLogo size={20} weight="bold" />
            <a href="https://www.linkedin.com/in/samuel-v%C3%ADtor-948498264/">
              LinkedIn
            </a>
          </p>
        </div>

        <span>celular: (34)99154-8846</span>
      </section>
    </ContainerFooter>
  )
}

