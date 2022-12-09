import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projects() {
    const images =[
        {
            title: '',
            name: '',
            technology: '',
            description: '',
            deployedLink: "",
            gitHubRepo: ""
        },
        {
            title: '',
            name: '',
            technology: '',
            description: '',
            deployedLink: "",
            gitHubRepo: ""
        },
        {
            title: '',
            name: '',
            technology: '',
            description: '',
            deployedLink: "",
            gitHubRepo: ""
        },
        {
            title: '',
            name: '',
            technology: '',
            description: '',
            deployedLink: "",
            gitHubRepo: ""
        },
        {
            title: '',
            name: '',
            technology: '',
            description: '',
            deployedLink: "",
            gitHubRepo: ""
        }
      ];
      return (
        <Container>
            <Card align="center">
                <Card.Body>
                   <h2> Full Stack Web Developer</h2>
                </Card.Body>
            </Card>
            <Row className="justify-content-md-center">
             {images.map((image, i) => (
                <Col onClick={() => console.log("test")} 
                 xs={12} md={6} xl={4}>
                <Card 
                text="dark" 
                className="mb-2 my-2 " 
                >
                <Card.Img 
                variant="top" 
                
                height={300}
                src={require(`../../assets/projects/${image.name}.JPG`).default}

                />
                <Card.Body>
                    <Card.Title >{image.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{image.technology}</Card.Subtitle>
                    <Card.Text>
                    {image.description}
                    </Card.Text>
                    
                    <Button 
                    className="mb-2 text-center" 
                    text="light" 
                    bg="primary" 
                    variant="primary"
                    href={image.gitHubRepo}
                    block
                    target="_blank">
                        Go to Project GitHub
                    </Button>
                    <Button 
                    className="mb-2 text-center" 
                    text="light" 
                    bg="primary" 
                    variant="primary"
                    href={image.deployedLink}
                    block
                    target="_blank">
                        Go to Deployed Project
                    </Button>
                </Card.Body>
                </Card>


                </Col>
             
             ))}

            </Row>
        </Container>
      );
}

export default Projects;