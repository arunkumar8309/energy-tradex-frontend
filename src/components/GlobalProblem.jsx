import Image from "next/image";
import TechnologyImg from "./../assets/technology.png";
import NatureImg from "./../assets/nature.png";
import FinanceImg from "./../assets/finance.png";

const GlobalProblem = () => {
  return (
    <div className="bg-green-50 py-16 px-4 max-lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-teal-600 font-bold text-sm">
            🌎 It's A Global Problem
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
          <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden">
            <Image
              src={TechnologyImg}
              alt="Technology"
              fill
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">TECHNOLOGY</span>
            </div>
          </div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
            <Image src={NatureImg} alt="Nature" fill objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">NATURE</span>
            </div>
          </div>
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden">
            <Image src={FinanceImg} alt="Finance" fill objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">FINANCE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalProblem;
