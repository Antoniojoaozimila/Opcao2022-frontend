import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Usuario from "../Pages/Usuarios/Usuario";
import Signin from "../Components/Singin/Singin";



const Router = () => {
  return (
    <BrowserRouter>
    
        <Routes>
         
          <Route path="/" element={<Signin />} />
       
          <Route path="/denunciar" element={<Usuario />} />
          <Route path="/denuncias" element={<Usuario />} />
  
          <Route path="/homeUser" element={<Usuario />} />
        </Routes>
    
    </BrowserRouter>
  );
};

export default Router;
