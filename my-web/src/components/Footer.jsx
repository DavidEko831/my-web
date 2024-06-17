import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import ConvertTemp from "./ConvertTemp";

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">
                {currentDateTime}
              </h4>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0 text-center">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <Button variant="outline-light" className="btn-social mx-1" href="https://github.com/DavidEko831" target="_blank"><i className="fab fa-fw fa-github"></i></Button>
            </Col>
            <Col lg={4} className="text-left">
              <ConvertTemp />
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="copyright py-4 text-center text-white">
        
      </div>
    </>
  )
}

export default Footer