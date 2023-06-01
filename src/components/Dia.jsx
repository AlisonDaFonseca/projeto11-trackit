import styled from "styled-components";
import { useState } from "react";

const diasEscolhidos = [];

export default function Dia({dia, diaNumero, setDiasSelecionados}){
    const [selecionado, setSelecionado] = useState(false);


    function escolherDia(){
        if(selecionado === false){
            setSelecionado(true);
            diasEscolhidos.push(diaNumero)
            setDiasSelecionados(diasEscolhidos);
        }else{
            setSelecionado(false);
            let indice = diasEscolhidos.indexOf(diaNumero);
            diasEscolhidos.splice(indice, 1)
            setDiasSelecionados(diasEscolhidos);
        }
        
    }

    return(
        <SCBotaoDia type="button" cor={selecionado} onClick={escolherDia}>{dia}</SCBotaoDia>
    );
}


const SCBotaoDia = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.cor === false ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.cor === false ? '#D5D5D5' : '#FFFFFF'};
    margin-right: 5px;
    margin-top: 5px;
`;