import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import DogSite from "../assets/dogsite.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
    }

`;

export const Render = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${DogSite});
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Foto = styled.img`
  width: 20vw;
  height: 25vh;
  margin-top: 1.5vw;
  border: solid;

  @media only screen and (max-width: 600px) {
    margin-top: 3vh;
    width: 60vw;
  }
`;

export const Click = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  border-radius: 1vw;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    border-radius: 10vw;
  }
`;

export const Menu = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const miniMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  width: 12vw;
  border-radius: 1vw;

  legend {
    color: white;
  }

  @media only screen and (max-width: 600px) {
    width: 60vw;
    border-radius: 10vw;
  }
`;
