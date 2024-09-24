"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; // Corrected path for Shadcn component
import { Button } from "@/components/ui/button"; // Corrected path for Shadcn component
import { Checkbox } from "@/components/ui/checkbox"; // Corrected path for Shadcn component
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import logo from "./../assets/logo.png";
import logingbanner from "./../assets/login-banner.png"; // Updated image for signup
import Link from "next/link";
import { signupUser } from "./../api/apiService"; // Import the signup function
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "", // Changed from name to username
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  }); // Updated error state
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter(); // Initialize the router

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error message on input change
  };

  // Validate input fields
  const validate = () => {
    const newErrors = { username: "", email: "", password: "" }; // Updated validation object

    // Username validation: should contain only characters and spaces
    if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
      newErrors.username =
        "Username should only contain characters and spaces.";
    }

    // Email validation: should be in correct email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in a valid format.";
    }

    // Password validation: should be at least 4 characters long
    if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters long.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === ""); // Return true if there are no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset success message

    if (!validate()) return; // Validate inputs; if invalid, return

    try {
      const response = await signupUser(formData);
      if (response.status === 201) {
        setSuccessMessage("Signup successful!");

        // Redirect after 1 second
        setTimeout(() => {
          router.push("/signing"); // Navigate to the signing page
        }, 1000);

        setFormData({ username: "", email: "", password: "" }); // Reset form data
      }
    } catch (error) {
      setErrors({
        ...errors,
        email: "Error: " + (error.response?.data?.message || "Signup failed."),
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#e6f7f5] items-center justify-center px-4">
      {/* Added px-4 for side padding */}
      {/* Left-side banner for larger screens */}
      <div className="hidden lg:flex lg:w-3/6 h-[650px] bg-[#024f43] items-center justify-center p-12 relative overflow-hidden flex-col shadow-lg rounded-lg ml-6">
        {/* Dummy image banner */}
        <div className="flex items-center justify-center">
          <Image
            src={logingbanner}
            alt="signupbanner"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="text-white z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Platform!</h2>
          <p className="text-lg">
            Join us today to unlock amazing features and benefits.
          </p>
        </div>
      </div>

      {/* Right-side form */}
      <div className="w-full lg:w-2/3 h-[650px] flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md">
          {/* Position logo at the top */}
          <div className="absolute top-10 left-10 right-10 flex justify-between items-center">
            <Image
              src={logo}
              alt="ENERGY TRADEX"
              width={100}
              height={40}
              className="h-10"
            />
            {/* Home link */}
            <Link
              href="/home"
              className="text-sm text-[#00d1a7] hover:underline font-medium"
            >
              Home
            </Link>
          </div>

          <div className="pt-20">
            <h1 className="text-2xl font-bold mb-6 text-start">
              Create Your Account
            </h1>
            {/* Success Message */}
            {successMessage && (
              <div className="text-green-500 text-sm pb-3">
                {successMessage}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <Input
                  type="text"
                  name="username" // Changed from name to username
                  placeholder="Username" // Changed placeholder text
                  className="w-full"
                  value={formData.username} // Updated to reference username
                  onChange={handleChange}
                />
                {errors.username && (
                  <div className="text-red-500 text-sm">{errors.username}</div>
                )}
              </div>

              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>

              {/* Password Input */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full pr-10"
                  value={formData.password}
                  onChange={handleChange}
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
                {errors.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center">
                <Checkbox id="terms" className="border-[#00d1a7]" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I agree to the Terms and Conditions
                </label>
              </div>

              {/* Signup Button */}
              <Button
                type="submit"
                className="w-full bg-[#00d1a7] hover:bg-[#00b090]"
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-start text-sm">
              <span className="text-gray-600">Already have an account? </span>
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
