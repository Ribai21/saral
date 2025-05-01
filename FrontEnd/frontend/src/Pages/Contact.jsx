import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Contact = () => {
  return (
    <>
      <Container>
        <h1
          className="text-center"
          style={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          Contact Us
        </h1>
        <div
          className=""
          style={{
            border: "1.4px solid teal",
            width: "100px",
            margin: "auto",
            marginBottom: "30px",
          }}
        ></div>
        <Row style={{ marginTop: "50px" }}>
          <Col className="p-10"
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop:"100px",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <LocationOnIcon style={{ fontSize: "30px", color: "red" }} />
              <span style={{ fontSize: "20px" }}>Tenkasi</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <CallIcon style={{ fontSize: "30px", color: "red" }} />
              <span style={{ fontSize: "20px" }}>9876543210</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <EmailIcon style={{ fontSize: "30px", color: "red" }} />
              <span style={{ fontSize: "20px" }}>saral@gamil.com</span>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px",color:"grey",display:"flex", justifyContent:"center" }}>
             &copy; 2023 All rights reserved | This template is made with ❤️ by Ribai 
        </Row>
        
      </Container>
    </>
  );
};

export default Contact;
