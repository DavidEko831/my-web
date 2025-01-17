import { Button, Col, Container, Row } from "react-bootstrap"

const About = () => {
  return (
    <section className="page-section about-nav text-white mb-0" id="about">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <Row>
          <Col lg={12} className="ms-auto text-center">
            <p className="lead">Halo Nama Saya David,salam kenal</p>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="outline-light" size="xl" href="#">
            <i className="fas fa-download me-2"></i> Download CV
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default About