import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [imagemPerfil , setImagemPerfil] = useState('https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [verificaCardVazio, setVerificaCardVazio] = useState(true);
    const [listaHabitos, setListaHabitos] = useState([{id: 1, name: 'Ler livro', days: [1, 2, 3]}]);
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }


    return(
        <UsuarioContext.Provider value={{listaHabitos, setListaHabitos, imagemPerfil, setImagemPerfil, nome, setNome, verificaCardVazio, setVerificaCardVazio, email, setEmail, password, setPassword, config, setToken, id, setId}}>
            {children}
        </UsuarioContext.Provider>
    );
}