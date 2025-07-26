import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_CIIM from "../../assets/img/experience/ciim.svg";
import L_CONNECTTIX from "../../assets/img/experience//connecttix.svg";
import L_GANEMO from "../../assets/img/experience/ganemo.png";
import L_APPLAUDO from "../../assets/img/experience/applaudo.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_APPLAUDO} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">SEMINUEVOS INTERPERU - Full time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">UX/UI DESIGNER</strong>
                    <br />
                    <strong>Tecnologías:</strong> Figma, Adobe Photoshop
                    <br />
                    <strong>Duración:</strong> Agosto 2023 – Diciembre 2023
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-center">
                      <li>Realicé user research, para explorar las necesidades y comportamiento de los usuarios.</li>
                      <li>Diseñé un roadmap con las posibles soluciones visuales y funcionales.</li>
                      <li>Elaboré wireframes que representaban la estrucutra básica de las interfaces.</li>
                      <li>Desarrollé prototipos interactivos para simular el funcionamiento del producto final.</li>
                      <li>Participé en sesiones de testing, identificando errores para mejorar su usabilidad.</li>
                      <li>Acompañé en el proceso de lanzamiento plataformas web y mobile.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_GANEMO} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">HYDROSMART - Part time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">UI Designer</strong>
                    <br />
                    <strong>Tecnologías:</strong> Figma, Adobe Photoshop, Adobe Ilustrator
                    <br />
                    <strong>Duración:</strong> September 2024 – December 2024
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-center">

                      <li>Di vida a ideas creando interfaces limpias, visualmente atractivas y funcionales.</li>
                      <li>Diseñé pantallas para web y mobile apps con atención al detalle.</li>
                      <li>Convertí conceptos en prototipos interactivos usando Figma.</li>
                      <li>Colaboré codo a codo con equipos de UX, producto desarrollo.</li>
                      <li>Jugué con colores, tipografías y jerarquías para lograr experiencias intuitivas y accesibles.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CONNECTTIX} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Grupo ConnectTix SAC - Part time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Web App Developer</strong>
                    <br />
                    <strong>Technologies:</strong> Django, Python, PostgresSQL, Mercurial
                    <br />
                    <strong>Duration:</strong> November 2019 – February 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <strong>Backend development of a system for the control of oil transportation</strong>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CIIM} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Centro de Investigación de Ingeniería Molecular – CIIM – Part time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Internship</strong>
                    <br />
                    <strong>Technologies:</strong> BioPython, Bash - Shell Scripting, Dambe, MrBayes
                    <br />
                    <strong>Duration:</strong> August 2016 – January 2017
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <strong>Phylogenetic tree desing using MrBayes </strong>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

    </div>
  );
};

export default Experience;
