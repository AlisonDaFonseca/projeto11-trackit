import Logo from "../assets/logo-pequeno.svg"
import styled from "styled-components";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Topo(){
    const {imagemPerfil} = useContext(UsuarioContext);

    return (
        <SCHeader>
                <SCLogo src={Logo} alt="logo cabeçalho" />
                <SCPerfil src={imagemPerfil} alt="perfil" />
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
    position: fixed;
    width: 375px;
    top: 0;
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