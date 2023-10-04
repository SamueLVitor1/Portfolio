import styled from "styled-components";

export const ContainerMenuHamburguer = styled.div`
  display: none;
  position: relative;
  
  @media (max-width: 720px) {
    color:  ${props => props.theme.primary};
    display: block; 

    button{
      border: 0;
      background: transparent;
    }

    .buttonIcon{
      color:  ${props => props.theme.primary};
    }

    .menuOpen{
      background: ${props => props.theme.secondary};
      position: fixed;
      right: 0;
      top: -0;
      width: 100px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      button{
        align-self: flex-end;
      }

      div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 2rem;
        margin-bottom: 10px;
      }
    }

    
  }
`