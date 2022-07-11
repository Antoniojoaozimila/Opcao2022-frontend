import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Usuario from "../Pages/Usuarios/Usuario";
import Signin from "../Components/Singin/Singin";
import HomePage from "../Pages/HomeUser/HomePage";
import Denuncias from "../Pages/Denuncias/Denuncias";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/denunciar" element={<Usuario />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homeUser" element={<Usuario />} />
         <Route path="/denuncias" element={<Denuncias />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
