import axios from "axios";
import apiConfig from "./apiConfig"; // Ensure apiConfig has correct endpoints defined

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Sign-up User
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${apiConfig.signup.endpoint}`,
      userData
    );
    return response;
  } catch (error) {
    // Handle the error (e.g., return a custom error message or rethrow it)
    throw error;
  }
};

// Sign-in User
export const signin = async (credentials) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${apiConfig.signin.endpoint}`,
      credentials
    );
    return response;
  } catch (error) {
    throw error; // Handle or rethrow the error for further handling
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${apiConfig.forgotPassword.endpoint}`,
      email
    );
    return response;
  } catch (error) {
    throw error; // Handle or rethrow the error
  }
};

// Change Password
export const changePassword = async (email, currentPassword, newPassword) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${apiConfig.changePassword.endpoint}`,
      email,
      currentPassword,
      newPassword
    );
    return response;
  } catch (error) {
    throw error; // Handle or rethrow the error
  }
};
