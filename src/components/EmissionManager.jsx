import { ChevronRight, ChevronLeft, MoveUpRight } from "lucide-react";
import Image from "next/image";
import EmissionManagerIcon from "./../assets/Group 160.png";

export default function EmissionManager() {
  return (
    <div className="bg-[#00c37d] min-h-screen flex items-center justify-center p-6 pb-20 lg:pb-[13rem]">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl">
        {/* Left Section */}
        <div className="lg:w-1/2 text-[#060B1C] p-6 lg:p-12">
          <h3 className="text-sm font-bold mb-2 text-[#060B1C]">
            The Technology
          </h3>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing
          </h1>
          <p className="text-sm text-[#060B1C] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis.
          </p>
          <div className="flex space-x-4">
            <button className="p-3 bg-black text-white rounded-full shadow-lg">
              <ChevronLeft />
            </button>
            <button className="p-3 bg-black text-white rounded-full shadow-lg">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[68%] bg-[#051F26] p-6 lg:p-8 rounded-xl flex flex-col justify-between mt-8 lg:mt-0">
          <div className="mb-6 flex flex-col lg:flex-row justify-between items-center gap-5">
            <Image
              src={EmissionManagerIcon}
              alt="Emission Manager"
              className="w-full lg:w-[63%] border-solid border-2 border-white rounded-xl p-5"
            />
            <div className="bg-white rounded-xl w-full lg:w-[35%] p-4 mt-4 lg:mt-0">
              <div className="border-b-2 border-solid border-[#aaf5dc] mb-3">
                <p className="text-sm text-black">Gross Emission</p>
                <p className="text-xl lg:text-3xl font-bold text-[#00c37d]">
                  1200
                </p>
              </div>
              <div className="border-b-2 border-solid border-[#aaf5dc] mb-3">
                <p className="text-sm text-black">Net Emission</p>
                <p className="text-xl lg:text-3xl font-bold text-[#00c37d]">
                  825
                </p>
              </div>
              <div>
                <p className="text-sm text-black">Target</p>
                <p className="text-xl lg:text-3xl font-bold text-[#00c37d]">
                  825
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white text-3xl lg:text-[40px]">
              Emissions Manager
            </h1>
            <p className="text-white pb-2">
              Run your climate program in one place.
            </p>
          </div>
          <ul className="list-disc text-gray-300 pl-5 mb-6 space-y-2 text-sm">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetuer adipiscing elit.</li>
          </ul>

          <a
            href="#"
            className="flex items-center text-[#00c37d] hover:underline"
          >
            <MoveUpRight className="bg-green-400 rounded-full w-10 h-10 p-2 mr-2 text-black" />
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
}
