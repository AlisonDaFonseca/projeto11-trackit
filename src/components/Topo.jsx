import Logo from "../assets/logo-pequeno.svg"
import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Topo(){

    const navigate = useNavigate();


   

    return (
        <SCHeader data-test="header">
                <SCLogo  src={Logo} alt="logo cabeçalho" />
                <SCPerfilELogout>
                    <IoLogOutOutline onClick={() => {
                    localStorage.clear();
                    navigate('/');
                }}/>
                    <SCPerfil data-test="avatar" src={localStorage.imagem} alt="perfil" />
                </SCPerfilELogout>   
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
`;
const SCPerfilELogout = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
        color: #f7eeee;
        font-size: 30px;
        cursor: pointer;
    }
`;
const SCPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 10px;
`;
