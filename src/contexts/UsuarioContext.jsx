import { createContext, useState } from "react";
import axios from "axios";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [verificaCardVazio, setVerificaCardVazio] = useState(true);
    const [listaHabitos, setListaHabitos] = useState([]);
    const [habitosHoje, setHabitosHoje] = useState([])
    
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    }

    function atualizaTela(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

        const promise = axios.get(URL, config);

        promise.then(resposta => {
            setHabitosHoje(resposta.data);
        });
        promise.catch(erro => console.log(erro.response.data.message));
    }
    function atualizaTelaHabitos(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        const promise = axios.get(URL, config);
        promise.then(resposta => {
            setListaHabitos(resposta.data)
            setVerificaCardVazio(false);
        })
        promise.catch(erro => console.log(erro.response.data.message))
    }

    return(
        <UsuarioContext.Provider value={{atualizaTela, atualizaTelaHabitos, habitosHoje, setHabitosHoje, listaHabitos, setListaHabitos, nome, setNome, verificaCardVazio, setVerificaCardVazio, email, setEmail, password, setPassword, config, id, setId}}>
            {children}
        </UsuarioContext.Provider>
    );
}