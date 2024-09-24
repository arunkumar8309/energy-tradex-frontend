import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import FooterSectionImg from "./../assets/hero.png";

export default function FooterSection() {
  return (
    <footer className="bg-[#10131a] flex items-center justify-center flex-col">
      {/* Subscribe Section */}
      <div
        className="rounded-[50px] text-white py-10 w-[80%] mt-[-10%] mb-10 relative z-10"
        style={{
          background:
            "linear-gradient(304.56deg, #07CF8A -18.67%, #060B1C 120.85%)",
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-end justify-between space-y-6 lg:space-y-0 px-6 lg:px-0">
          {/* Left Side */}
          <div className="max-w-lg text-center lg:text-left pl-6 lg:pl-16">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing
            </h1>
            <div className="flex flex-col lg:flex-row mt-6 items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email id"
                className="p-4 rounded-full bg-white text-black w-full lg:w-64 outline-none"
              />
              <button className="mt-4 lg:mt-0 lg:ml-4 px-6 py-3 bg-[#00c37d] text-white rounded-full hover:bg-[#00b066] transition">
                Subscribe
              </button>
            </div>
          </div>
          {/* Right Side Image */}
          <Image
            src={FooterSectionImg}
            className="hidden lg:block w-72 h-56 mb-0"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#10131a] py-10 text-white w-[80%] relative z-0">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Energy TradeX Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">ENERGY TRADEX</h2>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-10 text-sm">
          Copyright &copy; 2024 FirmMonk. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
