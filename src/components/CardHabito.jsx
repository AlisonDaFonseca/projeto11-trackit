import Habito from "../components/Habito";
import HabitoSalvo from "../components/HabitoSalvo";
import { useContext, useEffect } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";


export default function CardHabito({btnAdicionar, setBtnAdicionar}){

    const {config, atualizaTelaHabitos, atualizaTela, listaHabitos, setListaHabitos} = useContext(UsuarioContext);

    

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        const promise = axios.get(URL, config);
        promise.then(resposta => {
            setListaHabitos(resposta.data)
            atualizaTelaHabitos();
            atualizaTela();
        })
        promise.catch(erro => console.log(erro.response.data.message))

    }, [btnAdicionar]);
    
   

    return(
        <>
         {btnAdicionar === true && 
            <>
                <Habito setBtnAdicionar={setBtnAdicionar}/>
            </>
            } 

        {listaHabitos.map((habito) => <HabitoSalvo key={habito.id} habito={habito}/>)} 
       </> 
    )
}