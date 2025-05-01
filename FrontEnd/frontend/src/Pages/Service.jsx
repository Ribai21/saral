import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LocalBar, RoomService  } from "@mui/icons-material";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

import img1 from "./../assets/pa-img1.webp";
import img2 from "./.././assets/pa-img2.jpeg";
import img3 from "./.././assets/pa-img3.webp";
import { Box, Typography } from "@mui/material";

const services = [
  {
    title: "PARTY AND EVENT",
    description:
      "Celebrate special moments with our catering services, making your events unforgettable.",
    icon: <LocalBar fontSize="large" sx={{ color: "red" }} />,
    image: img1,
  },
  {
    title: "BUFFET",
    description:
      "Enjoy a wide variety of delicious dishes in our buffet service, perfect for any occasion,",
    icon: <RoomService fontSize="large" sx={{ color: "red" }} />,
    image: img2,
  },
  {
    title: "Fine Dining",
    description:
      "Experience exquisite cuisine and impeccable service in our fine dining restaurant.",
    icon: <TableRestaurantIcon  fontSize="large" sx={{ color: "red" }} />,
    image: img3,
  },
];

const ServiceCard = ({ service }) => {
  return (
    <Card className="text-white position-relative overflow-hidden border-0">
      <Card.Img
        src={service.image}
        alt={service.title}
        className="opacity-75"
      />
      <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center text-center bg-dark bg-opacity-50">
        <div className="bg-white p-3 rounded-circle">{service.icon}</div>
        <Card.Title className="mt-3 fw-bold">{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

const Service = () => {
  return (
    <Container className="py-3">
      <Box marginBottom={"40px"}>
        <Typography
          variant="h3"
          className="text-center"
          sx={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          Our Services
        </Typography>
        <Box
        sx={{
          border:1.4,
          width:"100px",
          borderColor:"teal"
          ,margin:"auto"
        }}
        />
      </Box>
      {/* cards */}
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={4}>
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
