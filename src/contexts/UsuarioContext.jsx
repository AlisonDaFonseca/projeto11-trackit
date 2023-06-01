import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [imagemPerfil , setImagemPerfil] = useState('https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [id, setId] = useState('');



    return(
        <UsuarioContext.Provider value={{imagemPerfil, setImagemPerfil, nome, setNome, email, setEmail, password, setPassword, token, setToken, id, setId}}>
            {children}
        </UsuarioContext.Provider>
    );
}