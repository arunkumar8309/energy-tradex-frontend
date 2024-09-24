"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Corrected path for Shadcn component
import { Button } from "@/components/ui/button"; // Corrected path for Shadcn component
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import forgotPasswordBanner from "./../../assets/login-banner.png"; // Updated image for forgot password
import Link from "next/link";
import { forgotPassword, changePassword } from "./../../api/apiService"; // Import API functions

export default function ForgotPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false); // State to toggle change password block
  const [email, setEmail] = useState(""); // State for email input
  const [currentPassword, setCurrentPassword] = useState(""); // State for current password
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [emailError, setEmailError] = useState(""); // State for email error message
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const [message, setMessage] = useState(""); // State for success/error message

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Email validation regex
  const validatePassword = (password) => password.length >= 4; // Password length validation

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setEmailError("");
    setMessage("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const payload = { email }; // Forgot password payload

    try {
      const response = await forgotPassword(payload);
      if (response.status === 200) {
        setMessage("Please check your email for the dummy password.");
        setShowChangePassword(true); // Show change password section
      } else {
        setMessage("Failed to send reset link. Please try again.");
      }
    } catch (err) {
      setMessage("Error sending reset link. Please try again.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setMessage("");

    if (!validatePassword(currentPassword) || !validatePassword(newPassword)) {
      setPasswordError("Both passwords must be at least 6 characters long.");
      return;
    }

    const payload = {
      email,
      currentPassword,
      newPassword,
    }; // Change password payload

    try {
      const response = await changePassword(payload);
      if (response.status === 200) {
        setMessage("Password changed successfully. Redirecting to home...");
        setTimeout(() => {
          window.location.href = "/home"; // Redirect to /home after 3 seconds
        }, 3000);
      } else {
        setMessage("Failed to change password. Please try again.");
      }
    } catch (err) {
      setMessage("Error changing password. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#e6f7f5] items-center justify-center px-4">
      <div className="hidden lg:flex lg:w-3/6 h-[650px] bg-[#024f43] items-center justify-center p-12 relative overflow-hidden flex-col shadow-lg rounded-lg ml-6">
        <div className="flex items-center justify-center">
          <Image
            src={forgotPasswordBanner}
            alt="forgot password banner"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="text-white z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Forgot Your Password?</h2>
          <p className="text-lg">
            Don’t worry! Just enter your email and we’ll send you a link to
            reset it.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-[650px] flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md">
          <div className="absolute top-10 left-10 right-10 flex justify-between items-center">
            <Image
              src={logo}
              alt="ENERGY TRADEX"
              width={100}
              height={40}
              className="h-10"
            />
            <Link
              href="/home"
              className="text-sm text-[#00d1a7] hover:underline font-medium"
            >
              Home
            </Link>
          </div>

          <div className="pt-20">
            <h1 className="text-2xl font-bold mb-6 text-start">
              {showChangePassword
                ? "Change Your Password"
                : "Reset Your Password"}
            </h1>
            {message && <p className="text-green-500">{message}</p>}{" "}
            {/* Show success/error message */}
            {!showChangePassword ? (
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}{" "}
                  {/* Email error message */}
                </div>

                <Button className="w-full bg-[#00d1a7] hover:bg-[#00b090]">
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleChangePassword}>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Current Password"
                    className="w-full pr-10"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)} // Update current password state
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full pr-10"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} // Update new password state
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}{" "}
                {/* Password error message */}
                <Button className="w-full bg-[#00d1a7] hover:bg-[#00b090]">
                  Update Password
                </Button>
                <div className="mt-6 text-start text-sm">
                  <button
                    onClick={() => {
                      setShowChangePassword(false); // Hide Change Password
                    }}
                    className="text-[#00d1a7] hover:underline"
                  >
                    Forget Password
                  </button>
                </div>
              </form>
            )}
            <div className="mt-6 text-start text-sm">
              <span className="text-gray-600">Remember your password? </span>
              <Link href="/signing" className="text-[#00d1a7] hover:underline">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
