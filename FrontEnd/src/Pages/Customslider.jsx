import React from 'react';
import "./Hero.css";
import { Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll'; // renamed to avoid conflict

const Customslider = () => {
  return (
    <section id='/' className="slider">
      <div className="left">
        <span>Welcome to</span>
        <span style={{ color: "red" }}>Our Restaurants</span>
        <span>We serve the best food</span>
        <span>in the <span style={{ color: "red" }}>Town</span></span>
      </div>

      <ScrollLink to="table" smooth={true} duration={500}>
        {/* This must return valid JSX */}
        <span>
          <Button
            color="error"
            variant="contained"
            sx={{ marginTop: "10px" }}
          >
            Book Table
          </Button>
        </span>
      </ScrollLink>
    </section>
  );
};

export default Customslider;
