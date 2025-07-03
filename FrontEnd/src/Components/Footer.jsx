import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-danger text-white mt-5 pt-5 pb-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo & About */}
          <Col md={4} className="mb-4">
            <h3 className="fw-bold">Saral</h3>
            <p>
              Savor the flavors of tradition with a modern twist. At RedChili, every bite is an experience.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <FaFacebook className="fs-4 cursor-pointer" />
              <FaInstagram className="fs-4 cursor-pointer" />
              <FaTwitter className="fs-4 cursor-pointer" />
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" />123 Flavor Street, Chennai</p>
            <p><FaPhoneAlt className="me-2" />+91 98765 43210</p>
            <p><FaEnvelope className="me-2" />contact@redchili.com</p>
          </Col>

          {/* Newsletter */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Get Special Offers</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2"
                    
                />
              </Form.Group>
              <Button onClick={(e)=>{e.preventDefault()
alert("Thank you for subscribing!")
              }} variant="light" type="submit" className="fw-bold">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Saral Restaurant. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
