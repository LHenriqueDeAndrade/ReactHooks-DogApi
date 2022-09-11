import React from "react";
import Router from "./Routes/Route";
import * as S from "./Style/Styles.js";

const App = () => {
  return (
    <S.Render>
      <S.GlobalStyle />
      <Router />
    </S.Render>
  );
};

export default App;
