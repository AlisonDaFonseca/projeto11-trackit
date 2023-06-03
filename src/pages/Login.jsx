import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import styled from "styled-components"
import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"

export default function Login() {

    const { email, setEmail, setNome, password, setPassword, setId} = useContext(UsuarioContext);
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);

    function logar(e) {
        e.preventDefault();
        setCarregando(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

        const loginUsuario = { password: password, email: email }

        const promise = axios.post(URL, loginUsuario);

        promise.then(resposta => {
            setNome(resposta.data.name);
            setId(resposta.data.id);
            navigate('/hoje');
            localStorage.token = resposta.data.token;
            localStorage.imagem = resposta.data.image;
            setCarregando(false);
        });
        promise.catch(erro => {
            alert(erro.response.data.message)
            setCarregando(false);
        });


    }


    function cadastrar() {
        navigate('/cadastro');
    }


    return (
        <SCContainerLogin>
            <img src={Logo} />
            <SCForm onSubmit={logar}>
                <input data-test="email-input" type="email"
                    placeholder="email"
                    required
                    disabled={carregando}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input data-test="password-input" type="password"
                    placeholder="senha"
                    required
                    disabled={carregando}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {carregando === false &&
                    <button data-test="login-btn" disabled={carregando}>
                        Entrar
                    </button>
                }


                {carregando === true &&
                    <button data-test="login-btn" disabled={carregando}>
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
            <span data-test="signup-link" onClick={cadastrar}>Não tem uma conta? Cadastre-se!</span>
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        cursor: pointer;
    }
`;