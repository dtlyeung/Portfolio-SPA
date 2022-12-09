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
            title: 'project1',
            name: 'Pods & Parks',
            technology: 'HTML, CSS',
            description: 'A application to help users find podcasts they can listen to as well as any nearby parks if they want to go for a walk or run.',
            deployedLink: "https://adamgabo.github.io/PlayMeSpotify/",
            gitHubRepo: "https://github.com/AdamGabo/PlayMeSpotify"
        },
        {
            title: 'project2',
            name: 'Opinionated',
            technology: '',
            description: 'A simple app allowing users to post comments, as well as give likes and dislikes to posts that they either agree with, or disagree with. The ratio of likes to dislikes is presented in the form of a graph',
            deployedLink: "https://opinionated-scs.herokuapp.com/",
            gitHubRepo: "https://github.com/helpvisa/opinionated"
        },
        {
            title: 'project3',
            name: 'Textual Relations',
            technology: '',
            description: 'A movie and book catalog so that users can find both book titles and films in a single app. Helpful if a user is looking for source material/adaptations of their favourite films or books.',
            deployedLink: "https://mysterious-woodland-66616.herokuapp.com/",
            gitHubRepo: "https://github.com/Rankin47/Project-3"
        },
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