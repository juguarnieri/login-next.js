"use client"; // Instrução para indicar que o código é para ser executado no cliente 

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../signup/signup.css";
import Input from "../../componentes/Input";
import "../signup/error.css"; // CSS para erros
import Button from "../../componentes/Button";

export default function Signup() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(""); // Mensagem de erro da senha
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Mensagem de erro da confirmação
    const [successMessage, setSuccessMessage] = useState(""); // Mensagem de sucesso
    const [emailError, setEmailError] = useState(""); // Mensagem de erro do email
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    // Função para validar a senha
    const validatePassword = (password) => {
        const hasNumber = /\d/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
    
        if (password.length === 0) {
            setPasswordError(""); // Limpar erro se a senha estiver vazia
            setSuccessMessage(""); // Limpar mensagem de sucesso se a senha estiver vazia
        } else if (password.length < 6) {
            setPasswordError("A senha deve ter pelo menos 6 caracteres.");
            setSuccessMessage(""); // Limpar mensagem de sucesso se a senha for inválida
        } else if (password.length > 12) {
            setPasswordError("A senha deve ter no máximo 12 caracteres.");
            setSuccessMessage(""); // Limpar mensagem de sucesso se a senha for inválida
        } else if (!hasNumber) {
            setPasswordError("A senha deve conter pelo menos um número.");
            setSuccessMessage(""); // Limpar mensagem de sucesso se a senha for inválida
        } else if (!hasUpperCase) {
            setPasswordError("A senha deve conter pelo menos uma letra maiúscula.");
            setSuccessMessage(""); // Limpar mensagem de sucesso se a senha for inválida
        } else {
            setPasswordError(""); // Limpar erro se a senha for válida
            setSuccessMessage("Senha válida!"); // Mensagem de sucesso
        }
    };
    
    // Função para validar o email
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Por favor, insira um email válido.");
        } else {
            setEmailError("");
        }
    };

    // Função para validar se as senhas coincidem
    const validateConfirmPassword = (confirmPassword) => {
        if (password !== confirmPassword) {
            setConfirmPasswordError("As senhas não coincidem.");
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação das senhas e do email
        if (passwordError || confirmPasswordError || emailError) return; // Não permite continuar se houver erro

        // Se as senhas não coincidirem
        if (password !== confirmPassword) {
            setConfirmPasswordError("As senhas não coincidem.");
            return;
        }

        try {
            setLoading(true);
            // Simulando o envio do cadastro sem Firebase
            console.log("Usuário cadastrado:", { email, username, password });

            // Se tudo estiver correto, redireciona para o perfil
            router.push("/profile");
        } catch (error) {
            setLoading(false);
            alert("Erro ao criar conta. Tente novamente.");
        }
    };

    return (
        <div className="container">
            <div className="cardImg">
                <div className="imageSection"></div>
                <div className="loginSection">
                    <h2 className="loginTitle">CADASTRO</h2>
                    <p className="welcomeText">Crie sua conta e aproveite ao máximo!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label className="label">Nome de Usuário</label>
                            <Input 
                                tipo="text" 
                                text="Digite seu nome de usuário" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                autoComplete="off" // Desativa o preenchimento automático
                            />
                        </div>

                        <div className="inputGroup">
                            <label className="label">Email</label>
                            <Input 
                                tipo="email" 
                                text="Digite seu e-mail" 
                                value={email} 
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateEmail(e.target.value); // Valida o email enquanto o usuário digita
                                }} 
                                autoComplete="off" // Desativa o preenchimento automático
                            />
                            {emailError && <p className="error">{emailError}</p>} {/* Exibe erro do email */}
                        </div>

                        <div className="inputGroup">
                            <label className="label">Senha</label>
                            <Input 
                                id="password" 
                                tipo="password" 
                                text="Digite sua senha" 
                                value={password} 
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value); // Valida a senha enquanto o usuário digita
                                }} 
                                autoComplete="off" // Desativa o preenchimento automático
                            />
                            {passwordError && <p className="error">{passwordError}</p>} {/* Exibe erro da senha */}
                            {successMessage && <p className="success">{successMessage}</p>} {/* Mensagem de sucesso */}
                        </div>

                        <div className="inputGroup">
                            <label className="label">Confirmar Senha</label>
                            <Input 
                                id="confirmPass" 
                                tipo="password" 
                                text="Confirme sua senha" 
                                value={confirmPassword} 
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    validateConfirmPassword(e.target.value); // Valida se as senhas coincidem
                                }} 
                                autoComplete="off" // Desativa o preenchimento automático
                            />
                            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>} {/* Exibe erro caso as senhas não coincidam */}
                        </div>

                        <Button text={loading ? "Carregando..." : "Cadastre-se"} variant="primary" type="submit" disabled={loading} />

                        <div className="signupSection">
                            <p className="signupText">Já tem uma conta?</p>
                            <Button text="Faça login" onClick={() => router.push("/signin")} variant="secondary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
