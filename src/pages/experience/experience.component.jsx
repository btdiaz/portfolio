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
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_APPLAUDO} alt="Accenture logo" />
              </Card.Header>
              
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Applaudo Studios - Full time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">AWS DevOps Engineer</strong>
                    <br />
                    <strong>Technologies:</strong> Terraform, Python, PostgresSQL, Git, GitHub, GitHub Actions, Bash, AWS, HELM, EKS, Kubernetes, Docker, Helm, ArgoCD, Airflow, Lambda Functions, Cloud Functions, Cloud Scheduler, GCP Pub/Sub, Cert-Managera, Nginx Ingress Controller
                    <br />
                    <strong>Duration:</strong> April 2022 – April 2023
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <li>Cost analysys between AWS and GCP to choose the best service that fits the needs for the construction of a Data Ware House.</li>
                      <li>Involved in the research of a Production environment for Airflow as a Data Orchestrator.</li>
                      <li>Development and design of IaC with Terraform.</li>
                      <li>Implementation of CI/CD with Github Actions.</li>
                      <li>Implementation of GitOps with ArgoCD, Kubernetes and Helm.</li>
                      <li>Implementation of Lambda Functions.</li>
                      <li>Successfully completed the AWS DevOps Trainee Program.</li>
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
                  <Card.Title className="text-center">Ganemo - Full time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Beginner DevOps Engineer</strong>
                    <br />
                    <strong>Technologies:</strong> Jenkins, Python, PostgresSQL, Git, GitHub, Bash, AWS, Terraform, EKS, Kubernetes, Docker, Rancher, Jenkins Shared libraries
                    <br />
                    <strong>Duration:</strong> September 2021 – December 2022
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">

                      <li>Automation of deployment processes in AWS EKS.</li>
                      <li>Involved in the migration from Rancher to AWS EKS.</li>
                      <li>Creation of scripts in Python, Groovy and Bash for automation processes such as generation of backups, source code updates, etc.</li>
                      <li>Migrations and replications of Databases in RDS.</li>
                      <li>Monitoring of servers in Rancher.</li>
                      <li>Deployment of services for new clients in AWS EKS.</li>
                      <li>Migration and creation of jobs in Jenkins.</li>
                      <li>Creation of Pipelines in Jenkins.</li>
                      <li>Implementation of shared libraries in Jenkins.</li>
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
