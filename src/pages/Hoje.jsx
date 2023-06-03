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
    

   
    const {config, habitosHoje, setHabitosHoje, setHabitosConcluidosHoje, habitosConluidosHoje} = useContext(UsuarioContext)
    const porcentagem = Math.floor(habitosConluidosHoje * 100 / habitosHoje.length);


    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

        const promise = axios.get(URL, config);

        promise.then(resposta => {
            setHabitosHoje(resposta.data);
            let contador = 0;
            resposta.data.map(resposta => {
                if(resposta.done == true){
                    contador = contador + 1;
                }    
            })
           
            setHabitosConcluidosHoje(contador)
        });
        
        promise.catch(erro => console.log(erro.response.data.message));
    }, []);
    
    
    return (
        <SCContainerHoje>
            <Topo />
            <SCTitulo>
                <h1 data-test="today">{dia}, {diaN}/{mes}</h1>
                {habitosConluidosHoje === 0 &&
                    <span data-test="today-counter">Nenhum hábito concluído ainda</span>
                }  
                {habitosConluidosHoje!== 0 &&
                    <SCCorConcluido data-test="today-counter">{porcentagem}% dos hábitos concluídos</SCCorConcluido>
                } 
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
const SCCorConcluido = styled.span`
    color: #8FC549;
`;