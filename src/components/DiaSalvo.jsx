import styled from "styled-components";


export default function DiaSalvo({dia, habito, diaNumero}){
  
    return(
        <SCBotaoDia data-test="habit-day"  type="button" cor={habito.days.includes(diaNumero)} >{dia}</SCBotaoDia>
    );
}
const SCBotaoDia = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.cor === false ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.cor === false ? '#D5D5D5' : '#FFFFFF'};
    margin-right: 5px;
    margin-top: 5px;
`;