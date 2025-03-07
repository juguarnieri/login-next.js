"use client"; 
import styles from "../../styles/Cadastro.module.css"; 
import buttonStyles from "../../styles/Button.module.css"; 
import Input from "../../componentes/Input";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.cardImg}>
                <div className={styles.imageSection}></div>
                <div className={styles.loginSection}>
                    <h2 className={styles.loginTitle}>CADASTRO</h2>
                    <p className={styles.welcomeText}>Crie sua conta e aproveite ao máximo!</p>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Nome de Usuário</label>
                        <Input tipo="text" text="Digite seu nome de usuário" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <Input tipo="email" text="Digite seu e-mail" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Senha</label>
                        <Input id="password" tipo="password" text="Digite sua senha" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirmar Senha</label>
                        <Input id="confirmPass" tipo="password" text="Confirme sua senha" />
                    </div>

                    <button className={buttonStyles.button} onClick={() => router.push("/profile")}>Cadastre-se</button>

                    <div className={styles.signupSection}>
                        <p className={styles.signupText}>Já tem uma conta?</p>
                        <button className={buttonStyles.signup} onClick={() => router.push("/")}>Faça login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
