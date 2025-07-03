import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  
  
} from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import { Grid } from "@mui/material";
import React from "react";
import CustomBtn from "../Components/Custombtn";

import MenuData from "../Components/Datas/MenuData"
import { useNavigate } from "react-router-dom";
const Menu = (props) => {
  const {
    id,
    title,
    description,
    price,
    discountedPrice,
    rating,
    image,
    onClick,
  } = props;
  const navigate = useNavigate();
  
return (
    <section id="menu">
        <Box>
            <Typography
                variant="h3"
                align="center"
                style={{
                    marginTop: "5px",
                    position: "relative",
                    color: "red",
                    fontFamily: "Lavishly Yours",
                    fontWeight:"400;"
                }}
            >
                Our Menu
                <Box
                    sx={{
                        borderBottom: 2,
                        borderColor: "teal",
                        width: "100px",
                        margin: "auto",
                    }}
                />
            </Typography>
        </Box>
        <Grid container spacing={4} style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            {MenuData.map((product, id) => (
                <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ width: "250px", height: "320px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            sx={{ '&:hover': { transform: 'scale(1.07)' } }}
                            alt="Food Image"
                            transition="0.3s ease-in-out"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Box
                                sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                <Typography varient="h5">₹{product.discountedPrice}</Typography>
                                <Typography varient="h5" sx={{ textDecoration: "line-through" }}>₹{product.price}</Typography>
                            </Box>
                            <Rating name="read-only" defaultValue={product.rating || 0} readOnly sx={{ scale: ".7", marginLeft: "-20px" }} />
                            <Typography variant="body2" sx={{ fontSize: "12px", whiteSpace: "nowrap" }} color="text.secondary">
                                {product.description}
                            </Typography>
                            <CustomBtn
                                variant="outlined"
                                label="Order Now"
                                onClick={()=> navigate(`/menu/${product.id}`)}
                                endIcon={<PreviewIcon />}
                                sx={{
                                    marginTop: "7px",
                                    color: "red",
                                    borderColor: "red",
                                    width: "100%",
                                    '&:hover': {
                                        color: "white",
                                        outline: "none",
                                        backgroundColor: "rgba(187, 16, 16, 0.84)",
                                    }
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </section>
);
};

export default Menu;
