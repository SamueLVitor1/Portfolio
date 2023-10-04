import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  background: ${props => props.theme.headerBg}; 
  color: ${props => props.theme.primary};
  width: 100%;
  min-height: 40px;
  padding: 2.2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    font-weight: 400;
    font-size: 2.2rem;
    text-transform: uppercase;
  }
`

export const NavList = styled.nav` 
  display: flex;
  gap: 2rem;
  align-items: center;
  
  ul{
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;

    li{
      font-size: 2rem;
      transition: 0.2s ease-in;

      &:hover{
        transform: scale(1.05);
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 720px) {
    display: none; 
  }
`
