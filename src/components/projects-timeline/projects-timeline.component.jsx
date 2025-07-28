import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects

import L_Hydrosmart from "../../assets/img/projects/hydrosmart.png";
import L_SEMINUEVOS from "../../assets/img/projects/seminuevos_peru.png";
import L_Nebula from "../../assets/img/projects/nebula_portada.png";




import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Image from "react-bootstrap/Image";
import L_FIGMA from "../../assets/img/skills/figma.png";
import L_GOOGLE_TRENDS from "../../assets/img/skills/google_trends.png";
import L_PEXELS from "../../assets/img/skills/pexels.png";
import L_BEHANCE from "../../assets/img/skills/behance.png";
import L_PHOTOSHOP from "../../assets/img/skills/adobe_photoshop.png";






import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROYECTOS</h1>
      <Timeline>
        <Events>
        {/* Project: Hydrosmart */}
          <ImageEvent
            date="27/12/2024"
            className="text-center"
            text="HYDROSMART"
            src={L_Hydrosmart}
            alt="Hydrosmart"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Diseñé una interfaz intuitiva para el monitoreo de cultivos hidropónicos,
                         facilitando la visualización de datos como pH, humedad y temperatura. 
                         Este proyecto combinó funcionalidad y sostenibilidad, alineado con la identidad de la marca.
                        <hr />
                        <strong>Actividades:</strong>
                        <ul className="list-styles pt-1">
                          <li>Diseñé interfaces orientadas a la visualización y control de sistemas hidropónicos inteligentes.</li>
                          <li>Buscando mejorar la experiencia del usuario, propuse soluciones intuitivas para el monitoreo de variables como humedad, pH y temperatura.</li>
                          <li>Aporté en la construcción de una identidad visual coherente con la sostenibilidad y la innovación tecnológica del proyecto.</li>
                        </ul>
                        <hr />
                        <strong>Technologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="IOS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              FIGMA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PEXELS}
                                alt="Pexels"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Pexels
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHOTOSHOP}
                                alt="Photoshop"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Photoshop
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://gitlab.com/tecsup1/programacion-en-moviles-avanzado/pma-proyectofinal"
                  target="_blank"
                >
                  Ver Proyecto
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: SEMINUEVOS INTERPERU */}

          <ImageEvent
            date="22/12/2023"
            className="text-center"
            text="SEMINUEVOS INTERPERU"
            src={L_SEMINUEVOS}
            alt="EasyHotel"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Realicé la mejora de la plataforma digital, 
                        de la empresa. junto con mi equipo, llevamos a cabo sesiones de diseño centradas 
                        en las necesidades de los usuarios, se trabajó desde la investigación previa hasta la propuesta visual.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Realicé un análisis de mercado para identificar el público objetivo y su comportamiento</li>
                          <li>Diseñé y propuse mejoras para la plataforma digital de compra y venta de autos seminuevos</li>
                          <li>Colaboré con el equipo en la creación de wireframes, prototipos y diseño visual</li>
                          <li>Participé en reuniones con stkaeholders para alinear objetivos de negocio y necesidades del usuario</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Figma"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Figma
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHOTOSHOP}
                                alt="Photoshop"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Photoshop
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BEHANCE}
                                alt="Behance"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Behance
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gitlab.com/tecsup1/aplicaciones-moviles-multiplataforma/dam-exam4"
                  target="_blank"
                >
                  Ver Proyecto
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Nebula */}

          <ImageEvent
            date="28/08/2023"
            className="text-center"
            text="NÉBULA"
            src={L_Nebula}
            alt="Vierbeinig"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Diseñé y mejoré una tienda de ropa online femenina
                        enfocándome en la experiencia visual, intuitiva y este alineada con las necesidades
                        del usuario.
                        <hr />
                        <strong>Actividades:</strong>
                        <ul className="list-styles pt-1">
                          <li>Analicé la interfaz original, mediante una matriz de viabilidad
                            factibilidad y deseabilidad.</li>
                          <li>Identifiqué los puntos de dolor y propuse soluciones efectivas
                            para cada uno.</li>
                          <li>Incorporé paleta de colores, tipografía y estilos alineados al perfil
                            femenino y modelo de marca.</li>
                          <li>Realice pruebas de usabilidad y ajusté elementos visuales</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="FIGMA"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              FIGMA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GOOGLE_TRENDS}
                                alt="Google Trends"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GOOGLE TRENDS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PEXELS}
                                alt="Pexels"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PEXELS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.figma.com/design/00JZIe66mgloj8NusCylgq/Nebula-Web-Mobile?node-id=5-19&t=DYfb9LROPQwAmLyX-1"
                  target="_blank"
                >
                Ver Proyecto
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
