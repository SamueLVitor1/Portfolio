import styled from "styled-components";

export const ContainerTechnologies = styled.section`
  max-width: 117rem;
  padding: 8px;
  width: 100%;
  margin: 11rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  h2{
    color:${props => props.theme.aboutMeColor};
    font-size: 3.5rem;
    text-align: center;
  }

  div{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 70rem;
    width: 100%;
    min-width: 300px;

    border: 1px solid rgb(53, 53, 53);
    padding: 2rem;
    border-radius: 2rem;

    p + p{
      margin-top: 6px;
    }

    p{
      font-weight: 600;
      color:${props => props.theme.primary};
      display: flex;
      align-items: center;
      gap: 6px;

      span{
        color:${props => props.theme.secondary};
      }
    }
  }
`