import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuData from "../Components/Datas/MenuData";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import Menu from "./Menu";
import { use } from "react";
import { Box, Typography } from "@mui/material";
export const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product ,setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const found = MenuData.find((product) => product.id === Number(id));
    setProduct(found);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);  
    return () => clearTimeout(timer);
  }, [id]);
    
  
  if(loading) {
    return (
      <Container style={{display:"flex",justifyContent:"center",alighItems:"center"}} className="text-center  mt-5">
        <Alert variant="info" className="fs-3 fw-bold"> 
          Loading Product Details...
        </Alert>
      </Container>
    );  
  }

  if (!product) {
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center fs-3 fw-bold">
          Product Not Found
        </Alert>
      </Container>
    );
  }
  
  return (
    <Container className="my-5">
      {/* Back Button */}
      <Button
        variant="outline-danger"
        className="mb-4 d-flex align-items-center"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="me-2" />
        Go Back
      </Button>

      {/* Product Details */}
      <Card className="shadow-lg p-4">
        <Row>
          {/* Product Image */}
          <Col md={6} className="text-center">
            <Card.Img
              src={product.image}
              alt={product.title}
              style={{ maxHeight: "400px", objectFit: "contain" }}
              className="img-fluid "
            />
          </Col>

          {/* Product Info */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">{product.title}</h2>
            <p className="text-muted">{product.detailedDescription}</p>

            <h4 className="text-success mb-2">
              ₹{product.discountedPrice}{" "}
              <small className="text-muted text-decoration-line-through ms-2">
                ₹{product.price}
              </small>
            </h4>

            <p className="mt-3">
              <strong>Rating:</strong>{" "}
              <span className="text-warning">{product.rating} ★</span>
            </p>

            <Button variant="danger" className="mt-3">
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card>
      {/* Related Products */}
      <Box marginBottom={"40px"}>
        <Typography
          variant="h3"
          className="text-center mt-5"
          sx={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          Explore More Products
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
      <Row> 
        {MenuData
          .filter((item) => item.category === product.category && item.id !== product.id)
          .slice(0, 4)
          .map((relatedProduct) => (
            <Col md={3} key={relatedProduct.id} className="mb-4">
              <Card className="hover-zoom">
                <Card.Img
                  variant="top"
                  src={relatedProduct.image}
                  alt={relatedProduct.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{relatedProduct.title}</Card.Title>
                  <Card.Text>
                    ₹{relatedProduct.discountedPrice}{" "}
                    <small className="text-muted text-decoration-line-through ms-2">
                      ₹{relatedProduct.price}
                    </small>
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => navigate(`/menu/${relatedProduct.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
