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
                Hi there! I am <strong>&nbsp;Lucero Torres Díaz.</strong>
                a UX/UI designer passionate about turning ideas into meaningful, user-centered digital experiences.
                <br />
                I enjoy combining empathy, design thinking, and visual storytelling to create intuitive and engaging interfaces.
                <br />
                I believe greqt design happens throught collaboration, curiosity, and a genuine love for details.
                <br />
                In 2021, I completed my degree in Tourism and Hospitality, an experience that streghtned my passion for creating 
                memorable experiences for people. Over time that passion evolved into a deep interest in digital design and user experiences.
                <br />
                In 2023, I successfully completed my studies in UX/UI design. During 2024, I expanded my skills 
                throught online courses focused on tools such as Figma, Photoshop, and other essential platforms for 
                digital experience design.
                <br />
                This ongoing learning has allowed me to strengthen both my creative and technical skills, and to continue evolving
                as a UX/UI designer, committed to crafting intuitive, engaging, and meaningful digital experiences.
                <br />
                I would love to join a team where I can continue learning, take on new challenges, and grow as a product designer.
                I'm looking for opportunties that encourage collaboration, creativity, and ongoing development, personally and professionally. 
                <br />
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
