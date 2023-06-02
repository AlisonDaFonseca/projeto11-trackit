import styled from "styled-components";
import { useState, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Dia from "./Dia";
import axios from "axios";

export default function Habito({setBtnAdicionar}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {verificaCardVazio, atualizaTela, atualizaTelaHabitos, config, setVerificaCardVazio} = useContext(UsuarioContext);
    const [nomeHabito, setNomeHabito] = useState('')
    const [diasSelecionados, setDiasSelecionados] = useState([]);


    function salvarHabito(e){
        e.preventDefault();

        const cadastrarHabito = {name: nomeHabito, days: diasSelecionados}

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        const promise = axios.post(URL, cadastrarHabito, config)

        promise.then((resposta) => {
            console.log(resposta.data);
            atualizaTela();
            atualizaTelaHabitos();

        });
        promise.catch((erro) => console.log(erro.responde.data.message))


        setBtnAdicionar(false)
        setVerificaCardVazio(verificaCardVazio === true && false)
    }
    

    return (
        <SCCardHabitos>
            <div><input 
            placeholder="nome de hábito" 
            required
            value={nomeHabito}
            onChange={(e) => setNomeHabito(e.target.value)}
            /></div>
            <SCSelecaoDias>
                {dias.map((dia, i) =>  <Dia key={i} dia={dia} diaNumero={i} diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados}/>)}   
            </SCSelecaoDias>
            <SCBotaoCancelaSalva>
                <SCBotao  type="button" onClick={() => setBtnAdicionar(false)}cor="#52B6FF" background="#FFFFFF">Cancelar</SCBotao>
                <SCBotao onClick={salvarHabito} type="button" cor="#FFFFFF" background="#52B6FF">Salvar</SCBotao>
            </SCBotaoCancelaSalva>
        </SCCardHabitos>
    );
}
const SCCardHabitos = styled.form`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 27px 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    input{
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin: 0 auto;
    }
    input::placeholder{
        font-size: 20px;
        color: #D5D5D5;
    }
   
`;
const SCBotaoCancelaSalva = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
`;
const SCBotao = styled.button`
    width: 84px;
    height: 35px;
    color: ${(props) => { return props.cor }};
    background-color: ${(props) => { return props.background }};
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
`;
const SCSelecaoDias = styled.div`
     
`;
