import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import Add from "../assets/adicionar.png"
import "react-circular-progressbar/dist/styles.css";
import { useState, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import CardHabito from "../components/CardHabito";

export default function Habitos() {
    const {verificaCardVazio} = useContext(UsuarioContext);
    const [btnAdicionar, setBtnAdicionar] = useState(false);


    return (
        <SCContainerHabitos>
            <Topo />
            <SCMain>
                <SCAdicionarHabito>
                    <h1>Meus hábitos</h1>
                    <img onClick={() => setBtnAdicionar(true)} src={Add} alt="botão adicionar" />
                </SCAdicionarHabito>
                <CardHabito btnAdicionar={btnAdicionar} setBtnAdicionar={setBtnAdicionar}/>
                {verificaCardVazio === true &&
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                }
            </SCMain>
            <Menu />
        </SCContainerHabitos>
    );
}

const SCContainerHabitos = styled.div`
    background-color: #F2F2F2;
    width: 375px;
    min-height: 667px;
    margin: 75px auto;
    position: relative;
`;

const SCMain = styled.main`
    width: 90%;
    margin: 0 auto;
    span{
        font-size: 18px;
    }
`;
const SCAdicionarHabito = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    img{
        width: 40px;
        cursor: pointer;
    }
    h1{
        font-size: 22px;
        color: #126BA5;
    }
`;

