import React, { useState, useEffect } from "react";
import { Button, Dropdown, Form, TextField } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../Components/NavBAr/ResponsiveAppBar";
import "./Usuario.css";

import Axios from "axios";

import Maps from "../../Components/Maps/Maps";
import { send } from "emailjs-com";
import DropdownButton from "react-bootstrap/DropdownButton";

const Usuario = () => {
  const [lista, setLista] = useState("");
  const [toKeep, setToKeep] = useState([]);

  const [toSend, setToSend] = useState({
    nome: "",
    email: "",
    contacto: "",
    mensagem: "",
    file: null,
    resp:"",
  });

  const handlerChange = (chave, e) => {
    setToSend({ ...toSend, [chave]: e.target.value });
    setToSend({ ...toSend, ["file"]: URL.createObjectURL(e.target.files[0]) });
  };
  console.log(lista);
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log("enviado", {nome,email,contacto}); */
    Axios.post("http://localhost:21262/registro", {
      nome: toSend.nome,
      email: toSend.email,
      contacto: toSend.contacto,
      mensagem: toSend.mensagem,
    }).then((response) => {
      console.log(response);
    });

    send("service_82b385p", "template_33mt1tb", toSend, "6m3kboQmNReoHtuCa")
      .then((response) => {
        alert("SUCCESS!", response.status, response.text);
      })

      .catch((err) => {
        alert("FAILED...", err);
      });

    setToKeep([...toKeep, { ...toSend }]);
    setToSend({
      nome: "",
      email: "",
      contacto: "",
      mensagem: "",
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:21262/listar").then((response) => {
      setLista(response.data);
    });
  }, []);

  return (
    <div id="user">
      <Navbar />
      <div className="userContent">
        <div className="formSection">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="nome"
                value={toSend.nome}
                onChange={(e) => handlerChange("nome", e)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="email"
                name="email"
                value={toSend.email}
                onChange={(e) => handlerChange("email", e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact"
                name="contacto"
                value={toSend.contacto}
                onChange={(e) => handlerChange("contacto", e)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                name="mensagem"
                value={toSend.mensagem}
                onChange={(e) => handlerChange("mensagem", e)}
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              enviar
            </Button>

         
          </Form>
        </div>
           <div>
          <select    name="resp" onChange={(e)=>handlerChange("resp",e)}>
            <option value="">Selecione um responsavel</option>
            <option value="antoniojoaozimila@gmail.com">antoniojoaozimila@gmail.com</option>
            <option value="antonio.zimila@uem.ac.mz">antonio.zimila@uem.ac.mz</option>
          </select>
        </div>
        
        <div className="uploadSection">
          <div className="uploadForm">
            <label>Imagen</label>
            <input
              type="file"
              name="file"
              onChange={(e) => handlerChange("file", e)}
            />
            <br />
            <br />
            <img src={toSend.file} />
          </div>
        </div>
        <div>
          <Maps />
        </div>
      </div>
      <div>
        <p>nome:{toSend.nome}</p>
        <p>email:{toSend.email}</p>
        <p>contacto:{toSend.contacto}</p>
        <p>mensagem:{toSend.mensagem}</p>
        <p>same:{ toSend.resp  }</p>
      </div>
    </div>
  );
};

export default Usuario;
