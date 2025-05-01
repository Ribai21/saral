import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const Chef = () => {
  const Chef = [
    {
      id: 1,
      name: "Edward",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Chef 1 is a master of Italian cuisine, known for his delicious pasta dishes and homemade sauces. He has worked in some of the best restaurants in Italy and brings his expertise to our kitchen.",
      specialty: "Italian cuisine",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Franklin",
      image:
        "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Chef 1 is a master of Italian cuisine, known for his delicious pasta dishes and homemade sauces. He has worked in some of the best restaurants in Italy and brings his expertise to our kitchen.",
      specialty: "European cuisine",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Maquil",
      image:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Maquil is a master of Italian cuisine, known for his delicious pasta dishes and homemade sauces. He has worked in some of the best restaurants in Italy and brings his expertise to our kitchen.",
      specialty: "European cuisine",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Anne",
      image:
      "https://images.pexels.com/photos/30515754/pexels-photo-30515754/free-photo-of-portrait-of-a-confident-female-chef-holding-a-whisk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Anne is a master of Italian cuisine, known for his delicious pasta dishes and homemade sauces. He has worked in some of the best restaurants in Italy and brings his expertise to our kitchen.",
      specialty: "European cuisine",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Robert",
      image:
      "https://images.pexels.com/photos/8629076/pexels-photo-8629076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Robert is a master of Italian cuisine, known for his delicious pasta dishes and homemade sauces. He has worked in some of the best restaurants in Italy and brings his expertise to our kitchen.",
      specialty: "European cuisine",
      rating: 4.0,
    },
  ];
  return (
    <>
      <Container className="py-3">
        <h1
          className="text-center"
          style={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          Our Chefs
        </h1>
        <div
          style={{ border: "1.4px solid teal", width: "100px", margin: "auto",marginBottom: "30px" }}
        ></div>
        <Row className="g-4">
          {Chef.map((chef) => (
            <Col key={chef.id} md={4} className="d-flex">
              <Card className="chef-card flex-fill text-white position-relative cursor-pointer overflow-hidden border-0">
                <Card.Img src={chef.image} alt={chef.name} className="h-100" />
                <Card.ImgOverlay className="chef-overlay d-flex flex-column align-items-center justify-content-center text-center bg-dark bg-opacity-50">
                  <Card.Title className="mt-3 text-capitalize fw-bold">
                    {chef.name}
                  </Card.Title>
                  <Card.Text>{chef.description}</Card.Text>
                  <Card.Text>Specialty: {chef.specialty}</Card.Text>
                  <Card.Text>Rating: {chef.rating}</Card.Text>
                  <Row>
                    <Col className="icon">
                      <Instagram />
                    </Col>
                    <Col className="icon">
                      <Facebook />
                    </Col>
                    <Col className="icon">
                      <YouTube />
                    </Col>
                    <Col className="icon">
                      <Twitter />
                    </Col>
                  </Row>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Chef;
