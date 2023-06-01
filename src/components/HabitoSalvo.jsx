import styled from "styled-components";
import Excluir from "../assets/excluir.svg"
import DiaSalvo from "./DiaSalvo";


export default function HabitoSalvo({habito}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
   
    
   
    
    return (
        <SCCardSalvo>
            <SCTopoCardSalvo>
                <span>{habito.name}</span>
                <img  src={Excluir} alt="Icone de excluir card" />
            </SCTopoCardSalvo>
            <SCSelecaoDias>
                {dias.map((dia, i) => <DiaSalvo habito={habito} key={i} diaNumero={i} dia={dia}/>)}
            </SCSelecaoDias>
        </SCCardSalvo>
    );
}

const SCSelecaoDias = styled.div`
  
`;


const SCCardSalvo = styled.div`
    width: 340px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 27px 0;
 
`;
const SCTopoCardSalvo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;