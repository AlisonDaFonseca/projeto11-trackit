import Menu from "../components/Menu";
import Topo from "../components/Topo";
import styled from "styled-components";
import { IoCheckbox } from "react-icons/io5";


export default function Hoje() {
    return (
        <SCContainerHoje>
            <Topo />
            <SCTitulo>
                <h1>Segunda, 17/05</h1>
                <span>Nenhum hábido concluído ainda</span>
            </SCTitulo>
            <SCCardHabito>
                <SCTexto>
                    <h1>Ler 1 capitúlo de livro</h1>
                    <h2>Sequencia atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </SCTexto>
                <IoCheckbox />
            </SCCardHabito>

            <Menu />
        </SCContainerHoje>

    );
}
const SCContainerHoje = styled.div`
    background-color: #F2F2F2;
    width: 375px;
    min-height: 667px;
    margin: 0 auto;
    position: relative;
`;
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
const SCCardHabito = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    svg{
        color: #E7E7E7;
        width: 69px;
        height: 69px;
    }
`;
const SCTexto = styled.div`
    h1{
        font-size: 20px;
        line-height: 25px;
    }
    h2{
        font-size: 13px;
        line-height: 16px;
    }
`;