import { IoCheckbox } from "react-icons/io5";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";






export default function HabitoHoje({ habito }) {
    
    const { config, atualizaTela } = useContext(UsuarioContext);
    const [seqAtual, setSeqAtual] = useState((habito.done === true || (habito.currentSequence === habito.highestSequence && habito.currentSequence > 0)) ? '#8FC549' : '#666666')
    const [seqRec, setSeqRec] = useState((habito.currentSequence === habito.highestSequence && habito.currentSequence > 0) ? '#8FC549' : '#666666');
   

    function verificaSequencia() {
        const contador = habito.currentSequence + 1;
        if (habito.done === false) {
            if (contador > 0) {
                setSeqAtual('#8FC549');
            }
            if (habito.currentSequence === habito.highestSequence) {
                setSeqRec('#8FC549');
            }
        }
        if (habito.done === true) {
            const contador = habito.currentSequence - 1;
            if (contador === 0) {
                setSeqRec('#666666');
                setSeqAtual('#666666');
            }
            if (habito.currentSequence !== habito.highestSequence) {
                setSeqRec('#666666');
                setSeqAtual('#666666');
            }
            
        }

    }

    function marcaDesmarca() {
        if (habito.done === false) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`

            const promise = axios.post(URL, {}, config);

            promise.then(resposta => {
                console.log(resposta.data);
                verificaSequencia();
                atualizaTela();
            })
            promise.catch(erro => console.log(erro.response.data.message))
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`
            const promise = axios.post(URL, {}, config);

            promise.then(resposta => {
                console.log(resposta.data)
                verificaSequencia();
                atualizaTela();
            })
            promise.catch(erro => console.log(erro.response.data.message))
        }


       // habito.highestSequence
    }
    return (
        <>
            <SCCardHabito data-test="today-habit-container" cor={habito.done === true ? '#8FC549' : '#EBEBEB'}>
                <SCTexto>
                    <h1 data-test="today-habit-name" >{habito.name}</h1>
                    <h2>Sequencia atual: <SCSequenciaAtual data-test="today-habit-sequence" cor={seqAtual}>{habito.currentSequence} dias</SCSequenciaAtual> </h2>
                    <h2 >Seu recorde: <SCSequenciaRecorde data-test="today-habit-record" cor={seqRec}>{habito.highestSequence} dias</SCSequenciaRecorde></h2>
                </SCTexto>
                <IoCheckbox data-test="today-habit-check-btn" onClick={marcaDesmarca} />
            </SCCardHabito>
        </>
    );
}

const SCSequenciaAtual = styled.span`
    color: ${props => { return props.cor }};
`;
const SCSequenciaRecorde = styled.span`
    color: ${props => { return props.cor }};
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
        color: ${props => { return props.cor }};
        width: 69px;
        height: 69px;
        cursor: pointer;
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