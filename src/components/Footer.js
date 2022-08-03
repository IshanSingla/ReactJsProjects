import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              src="https://avatars.githubusercontent.com/u/79676239?v=4"
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/isishansingla/">
                <img
                  src="https://img.icons8.com/fluency/344/linkedin-2.png"
                  alt=""
                />
              </a>
              <a href="https://github.com/IshanSingla">
                <img
                  src="https://img.icons8.com/ios-filled/344/github.png"
                  alt=""
                />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
