import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBAr/ResponsiveAppBar";
import "./Denuncias.css";
import Tablecomponent  from "../../Components/Table/Table";
import { useFetch } from "../../Hooks/useFetch";

const Denuncias = () => {
  const { data, error, loading } = useFetch("denuncias");

  const tabelHead = () => [
    "ID",
    "Nome",
    "Email",
    "Contacto",
    "Mensagem",
    "IMG",
  ];

  const tableRows = () => {
    const rows = [];

    if (data) {
      for (const denuncias of data) {
        rows.push([
          denuncias.id,
          denuncias.nome,
          denuncias.email,
          denuncias.contacto,
          denuncias.mensagem,
        ]);
      }
    }
    return rows;
  };

  return (
    <div className="container-denuncias">
      <NavBar />
      <div>
        <Tablecomponent
          columns={tabelHead}
          rows={tableRows}
          title="Denuncias feitas"
        />
      </div>
    </div>
  );
};
export default Denuncias;
