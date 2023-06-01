import Habito from "../components/Habito";
import HabitoSalvo from "../components/HabitoSalvo";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


export default function CardHabito({btnAdicionar, setBtnAdicionar}){

    
    const {listaHabitos} = useContext(UsuarioContext);

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