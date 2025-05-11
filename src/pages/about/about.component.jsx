import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile2.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Gustavo Adolfo Torres Díaz.</strong>
                A passionate DevOps engineer and Biotekkkkkch engineer, born and brought up in Perú.
                I am self motivated, responsible, perseverant, easy to work
                in team, committed and creative.
                <br />
                In 2017, I successfully completed my Biotechnological Engineering career.
                <br />
                And in 2020 I sucessfully finished my career in Software Design and Systems Integration.
                <br />
                I have experience in DevOps roles designing, implementing, and maintaining infrastructure in the cloud using services from AWS and GCP. 
                <br />
                I would like to join a company where where I can continue to learn and grow professionally
                applying all the knowledge acquired in DevOps and Cloud management, biotechnology and software development during my
                formative years.
                <br />I am passionate about the new technologies that come out day by day as Machine Learning, Blockchain and Bioinformatics,
                and being able to be at the forefront with these.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1yDkApRRImSL5KY1RQ1z_9kOG_2J-HFRm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume (CV)
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/gtorres777" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gustavo-torres-díaz-4948361a1" target="_blank" rel="noopener noreferrer">
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
