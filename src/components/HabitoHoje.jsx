import { IoCheckbox} from "react-icons/io5";
import styled from "styled-components";
import {useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";






export default function HabitoHoje({habito}) {

    const {config, atualizaTela} = useContext(UsuarioContext);
    const [seqAtual, setSeqAtual] = useState((habito.currentSequence > 0 && habito.currentSequence === habito.highestSequence) ? '#8FC549' : '#666666')
    const [seqRec, setSeqRec] = useState((habito.currentSequence === habito.highestSequence && habito.currentSequence !== 0)? '#8FC549' : '#666666')
    
   
   

    function verificaSequencia(){
        const contador = habito.currentSequence + 1;
        if(habito.done === false){
            if(contador > 0){
                setSeqAtual('#8FC549')
            }
            if(habito.currentSequence === habito.highestSequence){
                setSeqRec('#8FC549')
             }
        }
        if(habito.done === true){
            const contador = habito.currentSequence - 1;
                setSeqAtual('#666666')
            if(contador !== habito.highestSequence){
                setSeqRec('#666666')
             }
        }
        
    }

    function marcaDesmarca(){
        if(habito.done === false){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`

            const promise = axios.post(URL, {}, config);

            promise.then(resposta => {
                console.log(resposta.data);
                verificaSequencia();
                atualizaTela();
                
            })
            promise.catch(erro => console.log(erro.response.data.message))
        }else{
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`
            const promise = axios.post(URL, {}, config);

            promise.then(resposta => {
                console.log(resposta.data)
                verificaSequencia();
                atualizaTela();
                
            })
            promise.catch(erro => console.log(erro.response.data.message))
        }
        


    }
    return (
        <>
            <SCCardHabito cor={habito.done === true ? '#8FC549' : '#E7E7E7'}>
                <SCTexto>
                    <h1>{habito.name}</h1>
                    <h2 >Sequencia atual: <SCSequenciaAtual cor={seqAtual}>{habito.currentSequence} dias</SCSequenciaAtual> </h2>
                    <h2>Seu recorde: <SCSequenciaRecorde cor={seqRec}>{habito.highestSequence} dias</SCSequenciaRecorde></h2>
                </SCTexto>
                <IoCheckbox onClick={marcaDesmarca} />
            </SCCardHabito>
        </>
    );
}

const SCSequenciaAtual = styled.span`
    color: ${props => {return props.cor}};
`;
const SCSequenciaRecorde = styled.span`
    color: ${props => {return props.cor}};
`;

const SCCardHabito = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    svg{
        color: ${props => {return props.cor}};
        width: 69px;
        height: 69px;
    }
`;
const SCTexto = styled.div`
    h1{
        font-size: 20px;
        line-height: 25px;
    }
    h2{
        font-size: 13px;
        line-height: 16px;
    }
`;