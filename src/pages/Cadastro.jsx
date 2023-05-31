import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import styled from "styled-components"

export default function Cadastro() {

    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();
        navigate('/');
    }
    function login(){
        navigate('/')
    }


    return (
        <SCContainerCadastro>
            <img src={Logo} />
            <SCForm onSubmit={cadastrar}>
                <input placeholder="email" required/>
                <input placeholder="senha" required/>
                <input placeholder="nome" required/>
                <input placeholder="foto" required/>
                <button>Cadastrar</button>
            </SCForm>
            <span onClick={login}>Já tem uma conta? Faça login!</span>
        </SCContainerCadastro>
    );
}

const SCContainerCadastro = styled.div`
    width: 375px;
    min-height: 667px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        margin-top: 10vh;
    }
    span{
       color: #52B6FF;
       text-decoration: underline;
       cursor: pointer;
    }
`;
const SCForm = styled.form`
    display: flex;
    flex-direction: column;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
    }
    input::placeholder{
        font-size: 20px;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 20px;
        margin-bottom: 30px;
        cursor: pointer;
    }
`;