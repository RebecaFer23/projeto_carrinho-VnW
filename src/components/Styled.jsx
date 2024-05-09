import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

const Center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
  background-color: #2d00f6ac;
  height: 130vh;
`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow: 2px 2px 2px #000000;
  font-size: 4.5rem;
  font-weight: 200;
  width: 42vw;
  ${Center}

  flex-direction: column;
  span {
    font-size: 3rem;
  }
`;

export const BoxOne = styled.div`
  height: 35vh;
  width: 50vw;
  ${Center}
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  gap: 20px;
  h2 {
    color: #000000;
    text-shadow: 2px 2px 2px #ffffff;
    font-weight: 200;
    width: 32vw;
    font-size: 2rem;
  }
`;

export const BoxTwo = styled.div`
  height: 50vh;
  width: 100%;
  ${Center}
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const BoxItem = styled.div`
  width: 51vw;
  ${Center}
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 1rem;

  img {
    width: 10vw;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const CartOne = styled.div`
${Center}
flex-direction: column;
justify-content: space-around;
position: absolute;
width: 27.5vw;
height: 82vh;
border-radius: 120px;
background-color: #F7E0CE;
bottom: 0vh;
`;

export const Ancora = styled.div`
position: relative;
width: 30vw;
height: 85vh;
`;

export const CartTwo = styled.div`
border: solid;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
width: 22.2vw;
height: 50vh;
background-color: #b3aaca;
border-radius: 80px;
  h3 {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  width: 12vw;
  height: 7vh;
  font-size: 1.1rem;
}
  img {
    width: 10vw;
    border-radius: 10px;
  }
`;

export const PlusSub = styled.div`
  border: solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12vw;
  height: 7vw;
  border-radius: 10vh;
  background-color: #b3aaca;
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 1.5rem;
    background-color: #a495ca;
    cursor: pointer;
  }
`;