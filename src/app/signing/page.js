"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import logingbanner from "./../../assets/login-banner.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signin } from "./../../api/apiService";

export default function SigningForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4; // Adjust this to your password policy
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 4 characters long.");
      return;
    }

    try {
      // Prepare the payload
      const payload = {
        email: email,
        password: password,
      };

      // Call the signin function with email and password
      const response = await signin(payload);
      if (response.status === 200) {
        console.log("Login successful", response.data);
        router.push("/home");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#e6f7f5] items-center justify-center px-4">
      <div className="hidden lg:flex lg:w-3/6 h-[650px] bg-[#024f43] items-center justify-center p-12 relative overflow-hidden flex-col shadow-lg rounded-lg ml-6">
        <div className="flex items-center justify-center">
          <Image
            src={logingbanner}
            alt="logingbanner"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="text-white z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Lorem Ipsum Dolor Consectetuer Adipiscing
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt.
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
              Login with Email
            </h1>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="text-sm">
                <a href="#" className="text-[#00d1a7] hover:underline">
                  I forgot password or can't sign in
                </a>
              </div>

              <div className="flex items-center">
                <Checkbox id="remember" className="border-[#00d1a7]" />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00d1a7] hover:bg-[#00b090]"
              >
                Login
              </Button>
            </form>

            <div className="mt-6 text-start text-sm">
              <span className="text-gray-600">Do not have an account? </span>
              <Link href="/" className="text-[#00d1a7] hover:underline">
                Create an Account
              </Link>
            </div>
            <div className="mt-6 text-start text-sm">
              <span className="text-gray-600">Remember your password? </span>
              <Link
                href="/forgotpassword"
                className="text-[#00d1a7] hover:underline"
              >
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
