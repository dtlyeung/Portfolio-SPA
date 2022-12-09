import React from "react";
import ProfilePic from '';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    //my-5 is spacing in react
  return (
    <section> 
    <Container >
      <Row>
        <Col className="text-center my-4">
          <h1 id="about">About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-1">
          <Image src={profileImage} 
          className="my-2" 
          style={{ width: "25%" }} 
          alt="cover" 
          roundedCircle />
        </Col>
      </Row>   
      <Row>
        <Col className="text-center my-5">
          <p>
            Lorem Ipsum
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center my-5">
          <a href="https://github.com/dtlyeung" target="_blank">
          <Image src={gitHubLogo} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="cover" 
          rounded />
          </a>
          <a href="https://www.linkedin.com/mwlite/in/dtlyeung" target="_blank">
          <Image src={linkedIn} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="github repo" 
          href="https://www.linkedin.com/in/dtlyeung"
          target="_blank"
          rounded />
          </a>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default About; 