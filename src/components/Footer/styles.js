import styled from "styled-components";


export const ContainerFooter = styled.footer`
  margin: 11rem auto;
  width: 100%;
  max-width: 70rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h2{
    color:${props => props.theme.aboutMeColor};
    font-size: 3.5rem;
    text-align: center;
  }
    
  section{
    width: 100%;
    border: 1px solid rgb(53, 53, 53);
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.primary};

    div{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      gap: 1rem;

      a{
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

    }

    p,span{
        border-top: 1px solid transparent;
        border-bottom: 2px solid transparent;

        &:hover{
          border-bottom: 2px solid ${props => props.theme.aboutMeColor};
        }
    }
  }

  @media (max-width: 344px) {
    font-size: 1.48rem;
  }
`