import styled from "styled-components";
import Excluir from "../assets/excluir.svg"

export default function HabitoSalvo(){
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return(
        <SCCardSalvo>
        <SCTopoCardSalvo>
            <span>Hábito salvo</span>
            <img src={Excluir} alt="Icone de excluir card" />
        </SCTopoCardSalvo>
        <SCSelecaoDias>
            {dias.map((dia, i) =>  <button key={i}>{dia}</button>)}    
        </SCSelecaoDias>
    </SCCardSalvo>
    );
}

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