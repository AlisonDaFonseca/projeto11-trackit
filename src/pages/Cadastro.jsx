import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"

export default function Cadastro() {
    const [imagemPerfil, setImagemPerfil] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        setCarregando(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

        const novoUsuario = { email: email, name: nome, image: imagemPerfil, password: password };

        const promise = axios.post(URL, novoUsuario);

        promise.then(() => {
            setCarregando(false);
            navigate('/')
        });
        promise.catch(erro => {
            setCarregando(false);
            alert(erro.response.data.message)
        });

    }
    function login() {
        navigate('/')
    }


    return (
        <SCContainerCadastro>
            <img src={Logo} />
            <SCForm onSubmit={cadastrar}>
                <input data-test="email-input" type="email" placeholder="email"
                    required
                    value={email}
                    disabled={carregando}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input  data-test="password-input" placeholder="senha"
                    required
                    disabled={carregando}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input data-test="user-name-input" placeholder="nome"
                    required
                    disabled={carregando}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input data-test="user-image-input"  type="url" placeholder="foto"
                    required
                    disabled={carregando}
                    value={imagemPerfil}
                    onChange={(e) => setImagemPerfil(e.target.value)}
                />
                {carregando === false &&
                    <button data-test="signup-btn" disabled={carregando}>Cadastrar</button>
                }
                {carregando === true &&
                    <button data-test="signup-btn" disabled={carregando}>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true} ba
                        />
                    </button>
                }

            </SCForm>
            <span data-test="login-link"  onClick={login}>Já tem uma conta? Faça login!</span>
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
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;