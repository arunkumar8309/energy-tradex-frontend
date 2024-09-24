import { Leaf, Plane, Boxes } from "lucide-react";

export default function CardSection() {
  return (
    <div className="bg-[#E0F5F4] py-12 flex justify-center items-center max-lg:px-5">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-[#14D7A6] rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center">
            <Leaf className="w-12 h-12 text-white" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">
              Sustainability Leaders
            </h2>
            <p className="text-white text-sm md:text-base">
              Track. Reduce. Remove. Report. Review.
            </p>
          </div>
        </div>
        <div className="bg-[#071D23] rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center">
            <Plane className="w-12 h-12 text-white" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">
              Project Developers
            </h2>
            <p className="text-white text-sm md:text-base">
              Grow the impact and value of your assets.
            </p>
          </div>
        </div>
        <div className="bg-[#0D1528] rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center">
            <Boxes className="w-12 h-12 text-white" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">
              Wholesale Markets
            </h2>
            <p className="text-white text-sm md:text-base">
              Complete end-to-end carbon and energy market services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
