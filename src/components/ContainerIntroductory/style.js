import styled from "styled-components";

export const Container = styled.main`
  max-width: 78.7rem;
  height: 100vh;
  width: 100%;
  margin: -6rem auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
  padding: 20px;
  gap: 2px;

  section:first-child{
    margin-top: 1rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      max-width: 40rem;
      width: 100%;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.primary};
      opacity: 0.9;

      
    }

  }

  section:last-child{
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      font-weight: 600;
      font-size: 1.7rem;
      color: ${props => props.theme.secondary};
    }

    h2{
      font-size: 4rem;
      font-weight: 600;
      color: ${props => props.theme.nameColor};
    }

    h3{
      font-size: 2.5rem;
      text-align: center;
      font-weight: 600;
      color: ${props => props.theme.secondary};
    }

    div {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 4rem;
      gap: 8px;

      button{
        padding: 4px;
        /* border: 1px solid ${props => props.theme.primary}; */
        border: 0;
        background: transparent;
        border-radius: 14px;
        padding: 6px;
        color: ${props => props.theme.primary};
        font-size: 1.5rem;
        font-weight: 500;

        --c:linear-gradient(${props => props.theme.primary} 0 0); /* update the color here */
        padding-bottom: .15em;
        background: var(--c), var(--c);
        background-size: .3em .1em;
        background-position:50% 100%;
        background-repeat: no-repeat;
        transition: .3s linear, background-size .3s .2s linear;

        &:hover{
          background-size: 40% .1em;
          background-position: 10% 100%, 90% 100%;
        }
      }
    }

    .redesSociais{
      padding: 4px;
      display: flex;
      align-items: center;
      gap: 2rem;

      .imgRedeSocial{
        color: ${props => props.theme.secondary};
        border: 1px solid ${props => props.theme.primary};
        border-radius: 50%;
        padding: 5px;
        /* opacity: 0.8; */
        transition: 0.2s;

        &:hover{
          transform: scale(1.02);
        }
      }
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;

    section:first-child{
      img{
        margin-top: 7rem;
        max-width: 20rem
      }
      
    }
  }
`