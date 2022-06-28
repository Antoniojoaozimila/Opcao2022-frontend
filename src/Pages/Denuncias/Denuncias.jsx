import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "../../Components/NavBAr/ResponsiveAppBar";
import "./Denuncias.css";

const Denuncias = () => {
  const [lista, setLista] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:21262/listar").then((response) => {
      setLista(response.data);
    });
  }, []);
  return (
    <div className="container-denuncias">
      <NavBar />
      <div>
        <h1>Denuncias:{console.log(lista)}</h1>
      </div>
    </div>
  );
};
export default Denuncias;
