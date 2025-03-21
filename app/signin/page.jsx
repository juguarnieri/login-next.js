"use client";
import "../signin/home.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
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
              <a
                href="https://accounts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/google1.png" alt="Google" />
              </a>
            </div>
            <div className="media">
              <a
                href="https://www.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/apple.png" alt="Apple" />
              </a>
            </div>
            <div className="media">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook1.png" alt="Facebook" />
              </a>
            </div>
          </div>
          <Button
            text="Entre no seu perfil!"
            onClick={() => router.push("/profile")}
            variant="primary"
          />

          <div className="signupSection">
            <p className="signupText">Não tem uma conta?</p>
            <Button
              text="Sign Up"
              onClick={() => router.push("/signup")}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
