import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_SEMINUEVOS from "../../assets/img/experience/seminuevos_interperu.png";
import L_HYDROSMART from "../../assets/img/experience/hydrosmart.png";
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
                <Card.Img variant="top" className="img-resize" src={L_HYDROSMART} alt="Hydrosmart logo" />
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
                    <strong>Duración:</strong> Setiembre 2024 – Diciembre 2024
                    <br/>
                    <strong> Descripción </strong>
                    <ul className="text-center">

                      <li>Di vida a ideas creando interfaces limpias, visualmente atractivas y funcionales.</li>
                      <li>Diseñé pantallas para web y mobile apps con atención al detalle.</li>
                      <li>Convertí conceptos en prototipos interactivos usando Figma.</li>
                      <li>Participé activamente junto al equipo de UX, producto desarrollo.</li>
                      <li>Combiné colores, tipografías y jerarquías para lograr experiencias intuitivas y accesibles.</li>
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
                <Card.Img variant="top" className="img-resize" src={L_SEMINUEVOS} alt="Seminuevos logo" />
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
                    <strong>Duración:</strong> Setiembre 2023 – Diciembre 2023
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



    </div>
  );
};

export default Experience;
