import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
    return (
      <>
        <div className="background">
          <Container className="container-top">
            <Row className="section-top">
              <Col xs={12} md={6} className="section-top-left">
                <img className="img-fluid" src="/assets/mobile.png" />
              </Col>
              <Col xs={12} md={6} className="section-top-left">
                <div className="plate-img-container">
                </div>
                <h6>Bem vindo a Rubi!</h6>
                <h1>Conheça nossos produtos</h1>
                <h2>Tudo que você procura esta aqui.</h2>
                <button className="btn btn-custom">WhatsApp</button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default TopContainer;