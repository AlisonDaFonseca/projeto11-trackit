import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import styled from "styled-components"
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
    const [imagemPerfil , setImagemPerfil] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();
        
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

        const novoUsuario = {email: email, name: nome, image: imagemPerfil, password: password};

        const promise = axios.post(URL, novoUsuario);

        promise.then(resposta => navigate('/'));
        promise.catch(erro => alert(erro.response.data.message))


        
    }
    function login(){
        navigate('/')
    }


    return (
        <SCContainerCadastro>
            <img src={Logo} />
            <SCForm onSubmit={cadastrar}>
                <input type="email" placeholder="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input placeholder="senha" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input placeholder="nome" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <input type="url" placeholder="foto" 
                required
                value={imagemPerfil}
                onChange={(e) => setImagemPerfil(e.target.value)}
                />
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