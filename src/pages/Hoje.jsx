import Menu from "../components/Menu";
import Topo from "../components/Topo";
import styled from "styled-components";
import HabitoHoje from "../components/HabitoHoje";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' ;


export default function Hoje() {
 
    let hoje = dayjs().locale('pt-br');
    let dia = hoje.format("dddd");
    dia = hoje.format("dddd")[0].toUpperCase() + hoje.format("dddd").substring(1);
    dia = dia.replace('-feira', '');
    const diaN = hoje.format("DD");
    const mes = hoje.format("MM");

    const {config, habitosHoje, setHabitosHoje} = useContext(UsuarioContext)
    
    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

        const promise = axios.get(URL, config);

        promise.then(resposta => {
            setHabitosHoje(resposta.data);
        });
        promise.catch(erro => console.log(erro.response.data.message));
    }, []);
    
    
    
    return (
        <SCContainerHoje>
            <Topo />
            <SCTitulo>
                <h1>{dia}, {diaN}/{mes}</h1>
                <span>Nenhum hábido concluído ainda</span>
            </SCTitulo>
            {habitosHoje.map((habito) => <HabitoHoje key={habito.id} habito={habito}/>)  }
            <Menu />
        </SCContainerHoje>

    );
}

const SCTitulo = styled.div`
    width: 90%;
    margin: 20px auto;
    h1{
        color: #126BA5;
        font-size: 22px;
        line-height: 28px;
    }
    span{
        font-size: 17px
    }
`;
const SCContainerHoje = styled.div`
    min-height: 667px;
    position: relative;
    margin: 100px 0;
`;
