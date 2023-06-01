import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Menu(){
    const navigate = useNavigate();

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
        <SCFooter>
                <span onClick={rotaHabitos}>Hábitos</span>
                <SCBarraProgresso onClick={rotaHoje}>
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
                <span onClick={rotaHistorico}>Histórico</span>
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