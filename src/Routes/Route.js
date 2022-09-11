import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Components/Dogs";
import Header from "./Header";
import styled from "styled-components";

const Title = styled.h1`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    black 0%,
    yellow 29%,
    black 67%,
    yellow 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 7vw;
    letter-spacing: 2.88vw;
  }
`;

export default function Router() {
  return (
    <BrowserRouter>
      <Title>Adote um animalzinho de estimação</Title>
      <Header rota="Home" rota2="Adote um doguinho" rota3="Adote um gatinho" />
      <Routes>
        <Route path="/" />
        <Route path="/dog" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
}
