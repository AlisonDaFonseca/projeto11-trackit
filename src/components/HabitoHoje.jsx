import { IoCheckbox } from "react-icons/io5";
import styled from "styled-components";

export default function HabitoHoje({habito}) {
    console.log(habito)
    return (
        <>
            <SCCardHabito>
                <SCTexto>
                    <h1>{habito.name}</h1>
                    <h2>Sequencia atual: {habito.currentSequence} dias</h2>
                    <h2>Seu recorde: {habito.highestSequence} dias</h2>
                </SCTexto>
                <IoCheckbox />
            </SCCardHabito>
        </>
    );
}


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