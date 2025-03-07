"use client"; 
import { useRouter } from "next/navigation";
import profileStyles from '../../styles/Profile.module.css';
import buttonStyles from '../../styles/Button.module.css';
import Card from '../../componentes/Card';
import { FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Profile() {
    const router = useRouter();

    return (
        <div className={profileStyles.container}>
            <div className={profileStyles.profileCard}>
                <div className={profileStyles.leftSection}>
                    <img className={profileStyles.profileImage} src="/imagemEU.jpg" alt="Profile" />
                    <h2 className={profileStyles.profileName}>Júlia Andrade Guarnieri</h2>
                    <p className={profileStyles.profileTitle}>Desenvolvedora</p>

                    <div className={profileStyles.contactInfo}>
                        <div className={profileStyles.contactItem}>
                            <FaCalendarAlt className={profileStyles.icon} />
                            <p className={profileStyles.contactText}>04/11/2007</p>
                        </div>
                        <div className={profileStyles.contactItem}>
                            <FaMapMarkerAlt className={profileStyles.icon} />
                            <p className={profileStyles.contactText}>Valinhos, SP</p>
                        </div>
                        <div className={profileStyles.contactItem}>
                            <FaEnvelope className={profileStyles.icon} />
                            <p className={profileStyles.contactText}>juliaguarnieri04@gmail.com</p>
                        </div>
                        <div className={profileStyles.contactItem}>
                            <FaPhoneAlt className={profileStyles.icon} />
                            <p className={profileStyles.contactText}>(19) 98755-1593</p>
                        </div>
                    </div>
                    <div className={buttonStyles.signupSection}>
                        <p className={buttonStyles.signupText}>Volte para o </p>
                        <button className={buttonStyles.signup} onClick={() => router.push("/")}>Login</button>
                    </div>
                </div>

                <div className={profileStyles.rightSection}>
                    <div className={profileStyles.cardRow}>
                        <Card title="Sobre Mim" text="Olá, meu nome é Júlia e faço desenvolvimento de sistemas no SENAI Valinhos e estou cursando o terceiro ano do ensino médio no SESI Valinhos." />
                    </div>
                    <div className={profileStyles.cardRow}>
                        <Card title="Experiência" text="Desenvolvedora Full Stack, apaixonada em tecnologia." />
                    </div>
                    <div className={profileStyles.cardRow}>
                        <Card title="Habilidades" text="React, Next.js, Node.js, JavaScript." />
                    </div>
                    <div className={profileStyles.cardRow}>
                        <Card title="Hobbies" text="Gosto de brincar com as minhas cachorras, assistir jogos de futebol e investigar casos criminais!" />
                    </div>
                </div>
            </div>
        </div>
    );
}
