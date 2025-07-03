import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

const Table = () => {
  const [formData,setFormData]=useState([
    {name: "", email: "", date: "", time: ""},	
  ])
  const [submitted, setSubmitted] = useState(false);
  const handlechange=(e)=>{
    const{name,value}= e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", date: "", time: "" });
    }, 4000);
    console.log("Form submitted:", formData);
    alert("Table booked successfully!");
  }
  return (
    <>
      <section id="table"  className="tablebg" style={{ marginTop: "60px",padding:"10px",marginBottom:"60px" ,width:"100%"}}>
         <Typography
          variant="h3"
          className="text-center"
          sx={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          Book a Table
        </Typography>
        <Box
        sx={{
          border:1.4,
          width:"100px",
          borderColor:"teal"
          ,margin:"auto"
        }}
        />
       
       <form onSubmit={handleSubmit} className="text-danger fw-bold sm-w-100"   action="">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input name="name" value={formData.name}  onChange={handlechange}  type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input name="email" value={formData.email} onChange={handlechange} type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">
                Date
                </label>
                <input name="date" value={formData.date} onChange={handlechange} type="date" className="form-control" id="date" required />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">
                Time
                </label>
                <input name="time" value={formData.time} onChange={handlechange} type="time" className="form-control" id="time" required />
            </div>
            <button type="submit" className="btn btn-danger fw-bold">
                Book Now
            </button>
            {submitted && (
                <div className="alert alert-success mt-3" role="alert">
                    Table booked successfully! Our team will contact you shortly.
                </div>
            )}
        </form>

        <div className="">
             <Typography
                      variant="h3"
                      className="text-center"
                      sx={{ fontFamily: "Lavishly Yours", color: "red" }}
                    >
                      Opening Hours
                    </Typography>
                    <Box
                    sx={{
                      border:1.4,
                      width:"100px",
                      borderColor:"teal"
                      ,margin:"auto",
                      marginBottom:"20px"
                    }}
                    />
            <ListGroup variant="flush" className="time mt-4 sm-w-100" >
                <ListGroup.Item  style={{display:"flex",justifyContent:"space-between",color:"red",}}>Monday - Friday: <span>10:00 AM - 10:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red",}}>Saturday - Sunday: <span>11:00 AM - 11:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red"}}>Holidays: <span>12:00 PM - 8:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red"}}>Reservations: <span>24/7</span></ListGroup.Item>
                </ListGroup>
        </div>
       
      </section>
    </>
  );
};

export default Table;
