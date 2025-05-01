// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Button, Container, Card, Alert } from "react-bootstrap";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [user, setUser] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     if (!user.name || !user.email || !user.password) {
//       setError("All fields are required.");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(user.email)) {
//       setError("Invalid email format.");
//       toast.error("Invalid email format");
//       return false;
//     }
//     if (user.password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/register", user);

//       // ✅ Fix: Get message correctly
//       setMessage(res.data.message);
//       toast.success(res.data.message);

//       // ✅ Optional: Redirect after successful registration
//       setTimeout(() => {
//         navigate("/");
//       }, 5000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed.");
//       toast.error(err.response?.data?.message || "Registration failed.");
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//       <Card style={{ width: "400px", padding: "20px" }}>
//         <h2 className="text-center">Sign Up</h2>
        
//         {/* ✅ Fix: Show message in green for success, red for error */}
//         {error && <Alert variant="danger">{error}</Alert>}
//         {message && <Alert variant="success">{message}</Alert>}
        
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your name"
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100">
//             Register
//           </Button>
//         </Form>
//         <p className="mt-3 text-center">
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </Card>
//     </Container>
//   );
// };

// export default Register;



// MARK:bal

import { useState } from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputField from ".././Components/Inputfield.jsx";
import API from ".././Api/Axios.js";
import CustomBtn from ".././Components/Custombtn.jsx";
import { toast } from "react-toastify";

const Register = ({setIsAuthenticated}) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", formData);
      localStorage.setItem("isRegistered", "true");  // Set Registration Flag
      localStorage.setItem("userName", formData.name); // Store User Name
      setIsAuthenticated(true);
      toast.success("Signup Successful!");
      navigate("/login"); // Redirect to Home Page
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          textAlign: "center", 
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "2px 2px 2px 2px #975e64"
        }}
      >
        <Typography variant="h4">Signup</Typography>
        <form onSubmit={handleSubmit}>
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />

          <CustomBtn type="submit" hoverVariant="outlined" variant="contained" label="Sign Up" />

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Already have an account? <Link href="/login">Login</Link></Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
