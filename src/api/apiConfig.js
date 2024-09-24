const apiConfig = {
  signup: {
    name: "Signup",
    endpoint: "/api/auth/signup",
    method: "POST",
  },
  signin: {
    name: "Signin",
    endpoint: "/api/auth/signin",
    method: "POST",
  },
  forgotPassword: {
    name: "Forgot Password",
    endpoint: "/api/auth/forgot-password",
    method: "POST",
  },
  changePassword: {
    name: "Change Password",
    endpoint: "/api/auth/change-password",
    method: "POST",
  },
};

export default apiConfig;
