import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import styled from "styled-components"

export default function Login() {

    const navigate = useNavigate();

    function logar(e){
        e.preventDefault();
        navigate('/habitos');
    }
    function cadastrar(){
        navigate('/cadastro');
    }


    return (
        <SCContainerLogin>
            <img src={Logo} />
            <SCForm onSubmit={logar}>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="senha" required/>
                <button>Entrar</button>
            </SCForm>
            <span onClick={cadastrar}>Não tem uma conta? Cadastre-se!</span>
        </SCContainerLogin>
    );
}

const SCContainerLogin = styled.div`
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