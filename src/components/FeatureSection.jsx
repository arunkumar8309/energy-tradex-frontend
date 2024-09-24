import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import FeatureSectionImg1 from "./../assets/Group 151.png";
import FeatureSectionImg2 from "./../assets/Group 152.png";
import FeatureSectionImg3 from "./../assets/Group 1087.png";

const FeatureSection = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center flex-col">
        <h4 className="text-green-700 font-semibold mb-2 text-center">
          It's A Global Problem
        </h4>
        <h2 className="text-4xl font-bold mb-4 text-center">
          Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>

        <div className="flex flex-wrap justify-center gap-8 items-center w-full md:w-[85%]">
          <Card
            title="Sustainability Leaders"
            text="Own your path to net zero."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat."
            image={FeatureSectionImg1}
          />
          <Card
            title="Project Developers"
            text="Drive value and impact."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat."
            image={FeatureSectionImg2}
          />
          <Card
            title="Wholesale Markets"
            text="Be in the heart of the market."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat."
            image={FeatureSectionImg3}
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, text, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-xs w-full mx-auto">
      <div className="flex mb-4 bg-[#E8F9F3] w-[28%] p-3 rounded-2xl">
        <Image src={image} alt={title} className="w-15 h-15 object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-[18px]">{text}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="flex items-center text-black hover:font-semibold">
        <MoveUpRight className="bg-green-400 rounded-full w-10 h-10 p-2 mr-2 text-black" />
        <span>Learn More</span>
      </a>
    </div>
  );
};

export default FeatureSection;
