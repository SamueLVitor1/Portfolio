import styled from "styled-components";

export const ContainerAboutMe = styled.main`
  max-width: 117rem;
  padding: 8px;
  width: 100%;
  margin: 4.4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  h2{
    color:${props => props.theme.aboutMeColor};
    font-size: 3.5rem;
  }

  section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img{
      margin: 0 auto;
      max-width: 30rem;
      width: 100%;
      height: 30rem;
      border-radius: 18px;
      margin-bottom: 4rem;
    }

    .presentationDiv{
      margin-top: -5rem;
      align-self: center;

      p{
        max-width: 50rem;
        color: ${props => props.theme.primary};
        font-size: 1.7rem;
      }
    }
  }

  .experience{
    max-width: 70rem;
    width: 100%;
    min-width: 300px;

    border: 1px solid rgb(53, 53, 53);
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      p, .iconStudent{
        color: ${props => props.theme.primary};
      }

      p{
        font-size: 1.8rem;
        font-weight: 600;
      }
    }

    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
     
      li{
        list-style: disc;
        color: ${props => props.theme.primary};
      }
    }
  }

  @media (max-width: 720px) {
    section{
    display: grid;
    grid-template-columns: 1fr;

    img{
      max-width: 20rem;
      width: 100%;
      height: 20rem;
      margin-bottom: 7em;
    }

    .presentationDiv{
      p{
        text-align: center;
      }}
    }
  }
`


