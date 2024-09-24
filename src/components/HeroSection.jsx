import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HeroImg from "./../assets/hero.png"; // Make sure this path is correct

export default function HeroSection() {
  return (
    <div className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper.
            </p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-sm sm:text-base"
              aria-label="Talk to Us"
            >
              Talk To Us
            </button>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src={HeroImg}
                alt="Hero section illustration"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2">
        <ChevronDown className="w-28 h-10 max-sm:w-8 max-sm:h-8 text-green-500 bg-white" />
      </div>
    </div>
  );
}
