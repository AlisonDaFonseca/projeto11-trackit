import styled from "styled-components";
import Logo from "../assets/logo-pequeno.svg"
import Add from "../assets/adicionar.png"
import Excluir from "../assets/excluir.svg"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Habitos() {
    return (
        <SCContainerHabitos>
            <SCHeader>
                <SCLogo src={Logo} alt="logo cabeçalho" />
                <SCPerfil src="https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg" alt="perfil" />
            </SCHeader>
            <SCMain>
                <SCAdicionarHabito>
                    <h1>Meus hábitos</h1>
                    <img src={Add} alt="botão adicionar" />
                </SCAdicionarHabito>
                <SCCardHabitos>
                    <div><input placeholder="nome de hábito" /></div>
                    <SCSelecaoDias>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </SCSelecaoDias>
                    <SCBotaoCancelaSalva>
                        <SCBotao cor="#52B6FF" background="#FFFFFF">Cancelar</SCBotao>
                        <SCBotao cor="#FFFFFF" background="#52B6FF">Salvar</SCBotao>
                    </SCBotaoCancelaSalva>
                </SCCardHabitos>
                <SCCardSalvo>
                    <SCTopoCardSalvo>
                        <span>Hábito salvo</span>
                        <img src={Excluir} alt="Icone de excluir card" />
                    </SCTopoCardSalvo>
                <SCSelecaoDias>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </SCSelecaoDias>
                </SCCardSalvo>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </SCMain>
            <SCFooter>
                <span>Hábitos</span>
                <SCBarraProgresso>
                    <CircularProgressbar
                        value={66}
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
                <span>Histórico</span>
            </SCFooter>
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
const SCHeader = styled.header`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
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
const SCCardHabitos = styled.div`
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
const SCSelecaoDias = styled.div`
     button{
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #D5D5D5;
        margin-right: 5px;
        margin-top: 5px;
    }
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
const SCFooter = styled.footer`
    position: absolute;
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
    }
`;
const SCBarraProgresso = styled.div`
    width: 25%;
    position: absolute;
    bottom: 5px;
    right: 140px;
`;
const SCBotaoCancelaSalva = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
`;
const SCBotao = styled.button`
    width: 84px;
    height: 35px;
    color: ${(props) => {return props.cor}};
    background-color: ${(props) => {return props.background}};
    border-radius: 4px;
    margin-left: 5px;
`;

const SCCardSalvo = styled.div`
    width: 340px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
 
`;
const SCTopoCardSalvo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;