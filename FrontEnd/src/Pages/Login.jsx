import { useState } from "react";
import { Container, Typography, Box, Link, Checkbox, FormControlLabel } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputField from ".././Components/Inputfield.jsx";
import API from ".././Api/Axios.js";
import CustomBtn from ".././Components/Custombtn.jsx";

const Login = ({setIsAuthenticated}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit}>
          <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
          

          <CustomBtn type="submit" hoverVariant="outlined" variant="contained" label="Login" />

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Don't have an account? <Link href="/signup">Create New Account</Link></Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
