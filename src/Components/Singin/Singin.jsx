import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import "./Singnin.css";
import Location from "../../Components/Geolocation/Geolocalizacao"

import { Link, useNavigate } from "react-router-dom";
import Map2 from "../../Components/Maps/Map2"

const Singnin = () => {

  const navigate = useNavigate();

 const handleLogin = (values) => {
    Axios.post("http://localhost:21262/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      if (response.data.msg==="Usuário logado") {
         navigate("/home");
      } else {
         navigate("/");
      }
    });
  };

    const handleRegister = (values) => {
     
    Axios.post("http://localhost:21262/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);

    });
  };
  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
          
 {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>

     
    </div>
  );
};
export default Singnin;
