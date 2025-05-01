import axios from "axios";


const BASE_URL = "http://localhost:5000"; // Backend URL

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    return { message: "Login failed. Please try again." };
    
  }
};