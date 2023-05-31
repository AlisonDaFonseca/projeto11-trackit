import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import Add from "../assets/adicionar.png"
import "react-circular-progressbar/dist/styles.css";

import { useState } from "react";
import CardHabito from "../components/CardHabito";

export default function Habitos() {
    

    return (
        <SCContainerHabitos>
            <Topo />
            <SCMain>
                <SCAdicionarHabito>
                    <h1>Meus hábitos</h1>
                    <img src={Add} alt="botão adicionar" />
                </SCAdicionarHabito>

                <CardHabito />

            </SCMain>
            <Menu />
        </SCContainerHabitos>
    );
}

const SCContainerHabitos = styled.div`
    background-color: #F2F2F2;
    width: 375px;
    min-height: 667px;
    margin: 0 auto;
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
    }
    h1{
        font-size: 22px;
        color: #126BA5;
    }
`;

