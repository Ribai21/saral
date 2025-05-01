import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Table = () => {
  return (
    <>
      <Container  className="tablebg" style={{ marginTop: "60px",marginBottom:"60px" ,width:"100%"}}>
        <h1 className="text-center" style={{fontFamily:"Lavishly Yours", color:"red"}}>Book A Table</h1>
        <div className=""style={{border:"1.4px solid teal", width:"100px" ,margin:"auto"}}></div>
       
       <form className="text-danger fw-bold sm-w-100"   action="">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">
                Date
                </label>
                <input type="date" className="form-control" id="date" required />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">
                Time
                </label>
                <input type="time" className="form-control" id="time" required />
            </div>
            <button type="submit" className="btn btn-danger fw-bold">
                Book Now
            </button>
        </form>

        <div className="">
            <h1 className="text-center" style={{fontFamily:"Lavishly Yours",color:"red"}}>Opening Hours</h1>
            <div style={{border:"1.4px solid teal", width:"100px" ,margin:"auto" ,marginBottom:"60px"}}></div>
            <ListGroup variant="flush" className="time sm-w-100" >
                <ListGroup.Item  style={{display:"flex",justifyContent:"space-between",color:"red",}}>Monday - Friday: <span>10:00 AM - 10:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red",}}>Saturday - Sunday: <span>11:00 AM - 11:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red"}}>Holidays: <span>12:00 PM - 8:00 PM</span></ListGroup.Item>
                <ListGroup.Item style={{display:"flex",justifyContent:"space-between",color:"red"}}>Reservations: <span>24/7</span></ListGroup.Item>
                </ListGroup>
        </div>
       
      </Container>
    </>
  );
};

export default Table;
