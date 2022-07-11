import React, { useState, useEffect } from "react";
import { Button, Dropdown, Form, TextField } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../Components/NavBAr/ResponsiveAppBar";
import "./Usuario.css";

import Axios from "axios";

import Map2 from "../../Components/Maps/Map2";
import { send } from "emailjs-com";
import DropdownButton from "react-bootstrap/DropdownButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Upload.css";

const Usuario = ({ endereco }) => {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;
  console.log(dataAtual);

  const [lista, setLista] = useState("");
  const [toKeep, setToKeep] = useState([]);

  const [toSend, setToSend] = useState({
    nome: "",
    email: "",
    contacto: "",
    mensagem: "",
    file: null,
    resp: "",
  });

  const handlerChange = (chave, e) => {
    setToSend({ ...toSend, [chave]: e.target.value });
    setToSend({ ...toSend, ["file"]: URL.createObjectURL(e.target.files[0]) });

    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
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
      data: dataAtual,
      localizacao: "Maputo Mozambique",
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

  //--------------------------------Upload section---------------------------//
  const [images, setimages] = useState([]);

  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);

    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }
  //--------------------------------------------------------------------------------------------------------

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
          <select name="resp" onChange={(e) => handlerChange("resp", e)}>
            <option value="">Selecione um responsavel</option>
            <option value="antoniojoaozimila@gmail.com">
              antoniojoaozimila@gmail.com
            </option>
            <option value="antonio.zimila@uem.ac.mz">
              antonio.zimila@uem.ac.mz
            </option>
          </select>
        </div>
        {/*
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
        
        */}

        <div>
          <Map2 />
        </div>
      </div>
      <div>
        <div className="container-fluid">
          <br></br>

          {/* INPUT IMAGES */}
          <label className="btn btn-warning">
            <span>Seleccionar as fotos </span>
            <input
              hidden
              type="file"
              name="file"
              multiple
              onChange={(e) => handlerChange("file", e)}
            ></input>
          </label>

          {/* VIEW IMAGES */}
          <div className="row">
            {images.map((imagen) => (
              <div
                className="col-6 col-sm-4 col-lg-3 square"
                key={imagen.index}
              >
                <div className="content_img">
                  <button
                    className="position-absolute btn btn-danger"
                    onClick={deleteImg.bind(this, imagen.index)}
                  >
                    x
                  </button>
                  <img
                    alt="algo"
                    src={imagen.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className="img-responsive"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*
       <div>
        <p>nome:{toSend.nome}</p>
        <p>email:{toSend.email}</p>
        <p>contacto:{toSend.contacto}</p>
        <p>mensagem:{toSend.mensagem}</p>
        <p>same:{toSend.resp}</p>
      </div>
       */}
    </div>
  );
};
export default Usuario;
