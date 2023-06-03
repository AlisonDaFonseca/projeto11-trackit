import Topo from "../components/Topo";
import Menu from "../components/Menu";
import styled from "styled-components";

export default function Historico(){
    return(
        <SCContainerHistorico>
            <Topo />
            <SCHistorico>
                <h1>Histórico</h1>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </SCHistorico>
            <Menu />
        </SCContainerHistorico>
        
    );
}
const SCContainerHistorico = styled.div`
    min-height: 667px;
    margin: 100px auto;
    position: relative;
`;
const SCHistorico = styled.div`
    width: 90%;
    margin: 0 auto;
    h1{
        margin: 20px 0;
        font-size: 23px;
        color: #126BA5;
    }
    span{
        color: #666666;
        font-size: 18px;
        line-height: 23px;
    }
`;