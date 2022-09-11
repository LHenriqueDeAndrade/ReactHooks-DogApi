import React, { useState } from "react";
import axios from "axios";
import * as S from "../Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";
  const [open, setOpen] = useState(false);

  const DogsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
        setOpen(!open);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };

  return (
    <S.Menu>
      <h2>Clique no botão para gerar um Amigão</h2>
      {open && <S.Foto src={data} alt="dog" />}
      <S.Click
        onClick={() => {
          DogsApi();
        }}
      >
        Clique aqui
      </S.Click>
      <S.miniMenu>
        <legend>Selecione uma Raça</legend>
        <select>
          <option selected>Selecione</option>
          <option>Affenpinscher</option>
          <option>Afghan Hound</option>
          <option>Africanis</option>
          <option>Aidi</option>
          <option>Akbash</option>
          <option>Akita</option>
          <option>Aksaray Malaklisi</option>
          <option>Alano Español</option>
        </select>
      </S.miniMenu>
    </S.Menu>
  );
};

export default Dogs;
