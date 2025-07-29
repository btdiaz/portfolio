import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/perfil.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ACERCA DE MI</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hola! soy <strong>&nbsp;Lucero Torres Díaz.</strong>
                diseñadora UX/UI apasionada por transformar ideas en experiencias digitales significativas.
                <br />
                Disfruto combinar la empatía, el pensamiento de diseño y la narrativa visual para crear interfaces intuitivas y atractivas.
                <br />
                Creo firmemente que un gran diseño surge de la colaboración, la curiosidad y una genuina atención a los detalles.
                <br />
                En 2021, culminé mis estudios en Turismo y Hoteleria, una etapa que fortaleció mi vación por generar 
                experiencias memorables para las personas. Con el tiempo esa pasión evolucionó hacia un profundo interés
                por el diseño digital y la experiencia de usuario.
                <br />
                En 2023, finalicé mi formación en diseño UX/UI y durante 2024 amplié mis habilidades a través de cursos en línea
                enfocados en herramientas tecnológicas.
                <br />
                Este aprendizaje continuo me ha permitido fortalecer mis capacidades creativas y técnicas para seguir
                creciendo como diseñadora UX/UI, comprometida a crear experiencias digitales intuitivas, atráctivas y con propósito.
                <br />
                Estoy entusiamada por unirme a un equipo que fomente la colaboración, la creatividad y el crecimiento tanto personal
                como profesional, donde pueda seguir aprendiendo y asumir nuevos retos como diseñadora de productos.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contáctame
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1FaGAHUfsEa-OIBXz4Slgvdq8KvUYXBqR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Curriculum (CV)
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/btdiaz" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/lucerotdiaz/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
