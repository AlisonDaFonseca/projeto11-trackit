import styled from "styled-components";

export default function Habito({setCard}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <SCCardHabitos>
            <div><input placeholder="nome de hábito" /></div>
            <SCSelecaoDias>
                {dias.map((dia, i) =>  <button key={i}>{dia}</button>)}   
            </SCSelecaoDias>
            <SCBotaoCancelaSalva>
                <SCBotao cor="#52B6FF" background="#FFFFFF">Cancelar</SCBotao>
                <SCBotao onClick={() => {setCard(true)}} cor="#FFFFFF" background="#52B6FF">Salvar</SCBotao>
            </SCBotaoCancelaSalva>
        </SCCardHabitos>
    );
}
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
const SCBotaoCancelaSalva = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
`;
const SCBotao = styled.button`
    width: 84px;
    height: 35px;
    color: ${(props) => { return props.cor }};
    background-color: ${(props) => { return props.background }};
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
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
