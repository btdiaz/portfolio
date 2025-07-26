import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Tiomanga from "../../assets/img/projects/tiomanga.webp";
import L_Vierbeinig from "../../assets/img/projects/vierbeinig.webp";
import L_Mapacovid from "../../assets/img/projects/mapacovid.webp";
import L_Easyhotel from "../../assets/img/projects/easyhotel.webp";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Image from "react-bootstrap/Image";
import L_FIGMA from "../../assets/img/skills/figma.png";





import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTOS</h1>
      <Timeline>
        <Events>
        {/* Project: Mapa Covid-19 */}
          <ImageEvent
            date="20/07/2020"
            className="text-center"
            text="NÉBULA"
            src={L_Mapacovid}
            alt="Mapa Covid-19"
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
                        <strong>Description:</strong> Mobile Application that shows the hot spots
                        of people infected by COVID-19 on a map.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Users authentication through Firebase integration</li>
                          <li>Map to view the hot spots of the ones infected by COVID-19</li>
                          <li>Add reports for new hot spots</li>
                          <li>List reports for a specific area of the map</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="IOS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              IOS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Swift"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Swift
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
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
                  Repository
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: EasyHotel */}

          <ImageEvent
            date="27/06/2020"
            className="text-center"
            text="EasyHotel"
            src={L_Easyhotel}
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
                      Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Mobile Application that allows users to book hotel rooms
                         and room service depending of the hotel.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Authentication through the integration with Firebase</li>
                          <li>List hotels with their details for each one</li>
                          <li>Book a hotel room</li>
                          <li>Order food or drinks to the room depending on the hotel</li>
                          <li>Use of Redux</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="ReactNative"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
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
                  Repository
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Vierbeinig */}

          <ImageEvent
            date="12/12/2019"
            className="text-center"
            text="Vierbeinig"
            src={L_Vierbeinig}
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
                      Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Mobile Application designed to be able to
                        control a spider robot that measures the temperature and humidity.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Control the spider robot that is built with 3D printed parts</li>
                          <li>Get real time temperature and humidity measurement data</li>
                          <li>Authentication using Oauth integrated with Django</li>
                          <li>Generation of temperature and humidity reports establishing a period of time</li>
                          <li>Hosted using PythonAnyWhere </li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Arduino"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Arduino
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PythonAnyWhere
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Android"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Android
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
                  href="https://github.com/gtorres777/ADAs-Django"
                  target="_blank"
                >
                  Repository
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Tiomanga */}
          <ImageEvent
            date="17/06/2019"
            className="text-center"
            text="TioManga"
            src={L_Tiomanga}
            alt="Tiomanga"
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
                      Details
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Web Application to see mangas and to be able to
                        buy products related to the mangas seen in the web page.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>View Mangas</li>
                          <li>Mangas classified by categories</li>
                          <li>Dashboard for the administration of the web application</li>
                          <li>Payment gateway for the store implemented</li>
                          <li>Facilities for the user to manage their mangas preferences</li>
                          <li>Authentication system</li>
                          <li>
                            Hosted using AWS
                          </li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="Laravel"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Laravel
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="PHP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="MONGODB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIGMA}
                                alt="AWS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              AWS
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
                <UrlButton href="https://github.com/gtorres777/DAI_EliteManga" target="_blank">
                  Repository
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
