"use client";
import  "../signin/home.css";
import Input from "../../componentes/Input";
import Button from "../../componentes/Button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="cardImg">
                <div className="imageSection"></div>
                <div className="loginSection">
                    <h2 className="loginTitle">LOGIN</h2>
                    <p className="welcomeText">Seja bem-vindo!</p>

                    <div className="inputGroup">
                        <label className="label">Email</label>
                        <Input tipo="text" text="Digite seu e-mail" />
                    </div>

                    <div className="inputGroup">
                        <label className="label">Senha</label>
                        <Input id="password" tipo="password" text="Digite sua senha" />
                    </div>

                    <p className="forgotPassword">Esqueceu sua senha?</p>

                    <div className="socialmedia">
                        <div className="media">
                            <i className="fab fa-google"></i>
                        </div>
                        <div className="media">
                            <i className="fab fa-apple"></i>
                        </div>
                        <div className="media">
                            <i className="fab fa-facebook"></i>
                        </div>
                        <div className="media">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>

                    <Button text="Entre no seu perfil!" onClick={() => router.push("/profile")} variant="primary" />

                    <div className="signupSection">
                        <p className="signupText">Não tem uma conta?</p>
                        <Button text="Sign Up" onClick={() => router.push("/signup")} variant="secondary" />
                    </div>
                </div>
            </div>
        </div>
    );
}
