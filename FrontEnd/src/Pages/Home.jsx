import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import {Link} from "react-scroll"
const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className="d-flex justify-content-between bg-danger rounded-pill p-2 align-items-center"
        style={{
          width: "80%",
          margin: "auto",
          position: "fixed",
          zIndex: "100",
          top: "5%",
          left: "9.4%",
        }}
      >
        <h1
          className="ms-4 mt-2 fw-semibold text-light"
          style={{ fontFamily: "initial" }}
        >
          Saral
        </h1>
        <ul className="d-flex text-light me-5 navmenu align-items-center mt-3 fw-semibold fs-5 gap-4 list-unstyled">
          <Link to="/" smooth={true} duration={300}><li className="menuitem">Home</li></Link>
           <Link to="menu" smooth={true} duration={300}><li className="menuitem">Menu</li></Link>
           <Link to="service" smooth={true} duration={300}><li className="menuitem">Service</li></Link>
           <Link to="contact" smooth={true} duration={300}><li className="menuitem">Contact</li></Link>
        </ul>
        <CgMenuMotion
          size={30}
          onClick={() => setVisible(true)}
          className="hamberger"
          color="white"
        />
      </div>
      <div
        className={`mobilemenu ${visible ? "show" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "250px",
          backgroundColor: "red",
          color: "white",
          transform: visible ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 200,
        }}
      >
        <RiCloseLargeLine
          size={20}
          onClick={() => setVisible(false)}
          color="white"
          className="ms-auto d-flex fw-bold"
        />
        <ul className="list-unstyled gap-3 d-flex text-light flex-column fw-semibold justify-content-center align-items-center">
           <Link onClick={()=> setVisible(false)} to="/" smooth={true} duration={300}><li className="menuitem">Home</li></Link>
           <Link onClick={()=> setVisible(false)} to="menu" smooth={true} duration={300}><li className="menuitem">Menu</li></Link>
           <Link onClick={()=> setVisible(false)} to="service" smooth={true} duration={300}><li className="menuitem">Service</li></Link>
           <Link onClick={()=> setVisible(false)} to="contact" smooth={true} duration={300}><li className="menuitem">Contact</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Home;
