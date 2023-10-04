import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Container } from "./style";
import profileUrl from '../../img/profilee.jpg'

export function ContainerIntroductory() {
  return (
    <Container>
      <section>
        <img src={profileUrl} />
      </section>

      <section>
        <p>Olá, Eu sou o</p>
        <h2>Samuel</h2>
        <h3>Frontend Developer</h3>

        <div>
          <button>
            <a href="https://drive.google.com/file/d/1oJVG8ccKimEfQioC7nbMPYIQWzgxv49S/view?usp=sharing" target="_blank">
              Baixar CV
            </a>
          </button>
          
          <button>Info de contato</button>
        </div>

        <div className="redesSociais">
          <a href="https://github.com/SamueLVitor1" target="_blank">
            <GithubLogo size={32} weight="bold" className="imgRedeSocial" />
          </a>
          <a href="https://www.linkedin.com/in/samuel-v%C3%ADtor-948498264/" target="_blank">
            <LinkedinLogo size={32} weight="bold" className="imgRedeSocial" />
          </a>

        </div>
      </section>
    </Container>
  )
}