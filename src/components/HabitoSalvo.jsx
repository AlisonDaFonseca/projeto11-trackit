import styled from "styled-components";
import Excluir from "../assets/excluir.svg"
import DiaSalvo from "./DiaSalvo";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";


export default function HabitoSalvo({habito}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const {config, atualizaTelaHabitos} = useContext(UsuarioContext);
   
    
   function excluirHabito(){
    const confirmUsuario = confirm('Gostaria de deletar o hábito?')
    if(confirmUsuario){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`

        const promise = axios.delete(URL, config);
    
        promise.then(() => {
            alert('Hábito deletado')
            atualizaTelaHabitos();
        });
        promise.catch(erro => console.log(erro.response.data.message))
    }
 
   }
    
    return (
        <SCCardSalvo data-test="habit-container" >
            <SCTopoCardSalvo>
                <span data-test="habit-name">{habito.name}</span>
                <img  data-test="habit-delete-btn"  onClick={excluirHabito} src={Excluir} alt="Icone de excluir card" />
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
    img{
        cursor: pointer;
    }
`;