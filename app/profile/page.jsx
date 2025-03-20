"use client";
import { useRouter } from "next/navigation";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../profile/profile.css";
import { SiHtml5, SiCss3, SiReact, SiPostgresql } from "react-icons/si";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Profile() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="profileCard">
        <div className="leftSection">
          <img className="profileImage" src="/imagemEU.jpg" alt="Profile" />
          <h2 className="profileName">Júlia Andrade Guarnieri</h2>
          <p className="profileTitle">Desenvolvedora</p>

          <div className="contactInfo">
            <div className="contactItem">
              <FaCalendarAlt className="icon" />
              <p className="contactText">04/11/2007</p>
            </div>
            <div className="contactItem">
              <FaMapMarkerAlt className="icon" />
              <p className="contactText">Valinhos, SP</p>
            </div>
            <div className="contactItem">
              <FaEnvelope className="icon" />
              <p className="contactText">juliaguarnieri04@gmail.com</p>
            </div>
            <div className="contactItem">
              <FaPhoneAlt className="icon" />
              <p className="contactText">(19) 98755-1593</p>
            </div>
          </div>

          <div className="signupSection">
            <p className="signupText">Volte para o </p>
            <Button
              text="Login"
              onClick={() => router.push("/")}
              variant="primary"
            />
          </div>
        </div>

        <div className="rightSection">
          <div className="cardRow">
            <Card
              title="Sobre Mim"
              text="Olá, meu nome é Júlia e faço desenvolvimento de sistemas no SENAI Valinhos e estou cursando o terceiro ano do ensino médio no SESI Valinhos."
            />
          </div>
          <div className="cardRow">
            <Card
              title="Experiência"
              text="Desenvolvedora Full Stack, apaixonada em tecnologia."
            />
          </div>
          <div className="cardRow">
            <Card
              title="Habilidades"
              text={
                <div
                  className="skillsContainer"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <SiHtml5 className="icon" style={{ color: "white" }} />
                  <SiCss3 className="icon" style={{ color: "white" }} />
                  <SiReact className="icon" style={{ color: "white" }} />
                  <SiPostgresql className="icon" style={{ color: "white" }} />
                </div>
              }
            />
          </div>
          <div className="cardRow">
            <Card
              title="Hobbies"
              text="Gosto de brincar com as minhas cachorras, assistir jogos de futebol e investigar casos criminais!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
