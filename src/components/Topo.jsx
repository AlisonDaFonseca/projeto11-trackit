import Logo from "../assets/logo-pequeno.svg"
import styled from "styled-components";

export default function Topo(){
    return (
        <SCHeader>
                <SCLogo src={Logo} alt="logo cabeçalho" />
                <SCPerfil src="https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg" alt="perfil" />
        </SCHeader>
    );
}

const SCHeader = styled.header`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`;
const SCLogo = styled.img`
    width: 97px;
    height: 49px;
    margin-left: 10px;
`
const SCPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 10px;
`;