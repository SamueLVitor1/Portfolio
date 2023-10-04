import styled from "styled-components";

export const ContainerProjects = styled.section`
   max-width: 117rem;
  padding: 8px;
  width: 100%;
  margin: 4.4rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;


  h2{
    align-self: center;
    color:${props => props.theme.aboutMeColor};
    font-size: 3.5rem;
  }

  .projectCont{
    max-width: 100rem;
    padding: 2rem;
  }

  .projectContainer{
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(53, 53, 53);
    color:${props => props.theme.primary};
    border-radius: 2rem;
    padding: 1rem;

    h3{
      font-size: 2.2rem;
      text-transform: uppercase;
    }

    img{
      border-radius: 8px;
      height: 15rem;
      max-width: 20rem;
      border: 1px solid ${props => props.theme.primary};
      margin-bottom: 1rem;
    }

    div{
      width: 100%;
      margin-top: 1rem;
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(2, 1fr);
      
      a{
        padding: 0.50rem;
        background: transparent;
        border: 0;
        border: 1px solid ${props => props.theme.primary};
        border-radius: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;

        &:hover{
          transform: scale(1.05);
          opacity: 0.8;
        }
      }
    }
  }
`