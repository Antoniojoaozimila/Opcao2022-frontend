import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Usuario from "../Pages/Usuarios/Usuario";
import Signin from "../Components/Singin/Singin";
import HomePage from "../Pages/HomeUser/HomePage"



const Router = () => {
  return (
    <BrowserRouter>
    
        <Routes>
         
          <Route path="/" element={<Signin />} />
       
          <Route path="/denunciar" element={<Usuario />} />
          <Route path="/home" element={<HomePage />} />
  
          <Route path="/homeUser" element={<Usuario />} />
        </Routes>
    
    </BrowserRouter>
  );
};

export default Router;
