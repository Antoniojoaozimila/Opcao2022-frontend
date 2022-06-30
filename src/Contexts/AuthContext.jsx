import { createContext } from "react";
import { Outlet } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = () => {
    return(
        <AuthContext.Provider>
            <Outlet/>
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}