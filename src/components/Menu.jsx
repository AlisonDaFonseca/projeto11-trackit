import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Menu(){
    const navigate = useNavigate();
    const {habitosHoje, habitosConluidosHoje} = useContext(UsuarioContext);
    const porcentagem = Math.floor(habitosConluidosHoje * 100 / habitosHoje.length);
   
  

    function rotaHoje(){
        navigate('/hoje');
    }
    function rotaHabitos(){
        navigate('/habitos');
    }
    function rotaHistorico(){
        navigate('/historico');
    }

    return(
        <SCFooter data-test="menu">
                <span data-test="habit-link" onClick={rotaHabitos}>Hábitos</span>
                <SCBarraProgresso  data-test="today-link" onClick={rotaHoje}>
                    <CircularProgressbar
                        value={porcentagem}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </SCBarraProgresso>
                <span data-test="history-link" onClick={rotaHistorico}>Histórico</span>
            </SCFooter>
    );
}

const SCFooter = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0 20px;
        color: #52B6FF;
        font-size: 18px;
        cursor: pointer;
    }
`;
const SCBarraProgresso = styled.div`
    width: 25%;
    position: absolute;
    bottom: 5px;
    right: 140px;
    cursor: pointer;
`;