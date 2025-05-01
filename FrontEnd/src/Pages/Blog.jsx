import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import '../Pages/Blog.css'
const Blog = () => {
    return (
        <Box style={{ width: '100%',marginTop:"20px",boxshadow:"none" }}>
            <Box>
                        <Typography
                            variant="h3"
                            align="center"
                            style={{
                                marginTop: "5px",
                                position: "relative",
                                color: "red",
                                fontFamily: "Lavishly Yours",
                            }}
                        >
                            Our Story
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
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' ,boxShadow:"none" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img 
                            src="https://img.freepik.com/premium-vector/hotel-building-vector-illustration-modern-five-star-hotel-facade-front-view-entrance-hostel_1076457-181.jpg" 
                            alt="Hotel" 
                            className="blog-image"
                            style={{ width: '100%', height: '450px' ,objectFit:"contain" }} 
                        />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{fontWeight:"bolder",fontFamily:" Lora,serif"}} gutterBottom>
                            Saral
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam scelerisque leo nec orci varius, nec tincidunt arcu 
                            tincidunt. Sed sit amet sapien nec lorem tincidunt tincidunt. 
                            Curabitur non felis nec erat fermentum bibendum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam scelerisque leo nec orci varius, nec tincidunt arcu 
                            tincidunt. Sed sit amet sapien nec lorem tincidunt tincidunt. 
                            Curabitur non felis nec erat fermentum bibendum.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Blog;