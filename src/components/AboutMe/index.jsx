import { ContainerAboutMe } from "./style";
import programerGif from '../../img/programming-computer-frog.gif'
import { Student } from "phosphor-react";

export function AboutMe() {
  return (
    <ContainerAboutMe id="sobreMim">
      <h2>Sobre mim</h2>

      <section>
        <img src={programerGif} alt="" />

        <div className="presentationDiv">
          <div>

          </div>
          <p>
            Olá sou o Samuel, tenho 19 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIPAC e estudando  Desenvolvimento Web FullStack, iniciei minha jornada no Front-end, mas sempre buscando aprender   outras áreas da tecnologia, para aprimorar ainda mais meus conhecimentos e habilidades de desenvolvimento de software.
          </p>
        </div>
      </section>

      <section className="experience">
        <div>
          <Student size={32} weight="bold" className="iconStudent" />
          <p>Education</p>
        </div>

        <ul>
          <li>técnico em redes de computadores <span>(2021-2022)</span></li>
          <li>curso Análise e desenvolvimento de sistemas <span>(2023-atual)</span></li>
          <li>Curso Full Stack DevQuest <span>(2023-atual)</span> </li>
        </ul>
      </section>
    </ContainerAboutMe>
  )
}