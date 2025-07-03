import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
const Contact = () => {
  return (
    <>
      <section id="contact" className="m-1 mt-5">
      <Container>
          
         <Typography
          variant="h3"
          className="text-center"
          sx={{ fontFamily: "Lavishly Yours", color: "red",}}
        >
          Contact Us
        </Typography>
        <Box
        sx={{
          border:1.4,
          width:"100px",
          borderColor:"teal"
          ,margin:"auto"
        }}
        />
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
              <span style={{ fontSize: "20px" }}>123 Flavor Street,Tenkasi</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <CallIcon style={{ fontSize: "30px", color: "red" }} />
              <span style={{ fontSize: "20px" }}>9876543210</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <EmailIcon style={{ fontSize: "30px", color: "red" }} />
              <span style={{ fontSize: "20px" }}>contact@saral.com</span>
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
      </Container>
        
      </section>
    </>
  );
};

export default Contact;
