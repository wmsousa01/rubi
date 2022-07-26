import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
    return (
      <>
        <div className="background"></div>
          <div className="texture" src="/assets/bground.svg">
          <Container className="container-top">
            <Row className="section-top">
              <Col xs={12} md={6} className="section-top-left">
                <h6>Bem vindo a Rubi!</h6>
                <h1>Conheça nossos produtos</h1>
                <h2>Tudo que você procura esta aqui.</h2>
                <button className="btn btn-custom">WhatsApp</button>
              </Col>
              <Col xs={12} md={6} className="section-top-left">
                <img className="img-fluid" src="/assets/woman.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default TopContainer;