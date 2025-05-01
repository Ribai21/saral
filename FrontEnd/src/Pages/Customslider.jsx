import React from 'react'
import "./Hero.css"
import { Box, Button, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

const Customslider = () => {
  return (
    <>
      <section className="slider">
        <div className="left">
        <span>Welcome to</span>
        <span style={{color:"red"}}>Our Restaurants</span>
        <span>We serve the best food</span>
        <span>in the <span style={{color:"red"}}>Town</span></span>
        </div>
        <Button sx={{marginTop:"10px"}} color='error' variant="contained">Book Table</Button>
      </section>
    </>
  )
}

export default Customslider












































































// import React, { useState, useEffect } from "react";
// import { Box, Button, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// const images = [
//     "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

// const Customslider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box sx={{ position: "relative",marginBottom:"20px", width: "100%" }}>
//       {/* Image Container */}
//       <Box
//         sx={{
//           display: "flex",
//           overflow: "hidden",
//           width: "100%",
//           height: "516px",
//           position: "relative",
//         }}
//       >
//         {images.map((src, index) => (
//           <Box
//             key={index}
//             component="img"
//             src={src}
//             alt={`Slide ${index + 1}`}
//             sx={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               position: "absolute",
//               transition: "transform 0.5s ease-in-out",
//               transform: `translateX(${(index - currentIndex) * 100}%)`,
//             }}
//           />
//         ))}
//       </Box>

//       {/* Navigation Buttons */}
//       <IconButton
//         onClick={prevSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           transform: "translateY(-50%)",
//           color: "#fff",
//           backgroundColor: "rgba(0,0,0,0.5)",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <IconButton
//         onClick={nextSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           transform: "translateY(-50%)",
//           color: "#fff",
//           backgroundColor: "rgba(0,0,0,0.5)",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>

//       {/* Dots Navigation */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           position: "absolute",
//           bottom: "10px",
//           width: "100%",
//         }}
//       >
//         {images.map((_, index) => (
//           <Box
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             sx={{
//               width: "10px",
//               height: "10px",
//               backgroundColor: index === currentIndex ? "#ff4081" : "#ccc",
//               borderRadius: "50%",
//               margin: "0 5px",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Customslider;


