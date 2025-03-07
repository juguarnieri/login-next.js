"use client";
import styles from "../styles/Home.module.css";
import buttonStyles from '../styles/Button.module.css'; 
import Input from "../componentes/Input";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.cardImg}>
                <div className={styles.imageSection}></div>
                <div className={styles.loginSection}>
                    <h2 className={styles.loginTitle}>LOGIN</h2>
                    <p className={styles.welcomeText}>Seja bem-vindo!</p>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <Input tipo="text" text="Digite seu e-mail" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Senha</label>
                        <Input id="password" tipo="password" text="Digite sua senha" />
                    </div>

                    <p className={styles.forgotPassword}>Esqueceu sua senha?</p>

                    <div className={styles.socialmedia}>
                        <div className={styles.media}>
                            <i className="fab fa-google"></i>
                        </div>
                        <div className={styles.media}>
                            <i className="fab fa-apple"></i>
                        </div>
                        <div className={styles.media}>
                            <i className="fab fa-facebook"></i>
                        </div>
                        <div className={styles.media}>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    
                    <button className={`${styles.button} ${buttonStyles.button}`} onClick={() => router.push("/profile")}>
                        Entre no seu perfil!
                    </button>

                    <div className={styles.signupSection}>
                        <p className={styles.signupText}>Não tem uma conta?</p>
                        <button className={`${styles.signup} ${buttonStyles.signup}`} onClick={() => router.push("/cadastro")}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
