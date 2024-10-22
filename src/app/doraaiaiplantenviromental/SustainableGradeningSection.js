import { Heading } from "../../components";
import DoraAIAIPlantEnviromentalImageitem1 from "../../components/DoraAIAIPlantEnviromentalImageitem1";
import React, { Suspense } from "react";

const gardenImageList = [
  { imagesixOne: "img_image_6.png", verdantGrowth: "Verdant Growth", lushAbundance: "Lush Abundance" },
  { imagesixOne: "img_image_7.png", verdantGrowth: "Evergreen Elegance", lushAbundance: "Nature's Harmony" },
  { imagesixOne: "img_image_8.png", verdantGrowth: "Serene Sanctuary", lushAbundance: "Flourishing Oasis" },
];

export default function SustainableGardeningSection() {
  return (
    <>
      {/* sustainable gardening section */}
      <div className="flex">
        <div className="flex w-[90%] flex-col gap-5 bg-gray-50_02 py-4 md:w-full md:px-5">
          <div className="mt-10 flex justify-end pl-14 pr-[246px] md:px-5">
            <Heading
              size="heading2xl"
              as="h2"
              className="font-nunito text-[65px] font-semibold italic text-blue_gray-900_01 md:text-[48px]"
            >
              Sustainable Gardening
            </Heading>
          </div>
          <div className="ml-[74px] flex gap-[46px] md:ml-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {gardenImageList.map((d, index) => (
                <DoraAIAIPlantEnviromentalImageitem1 {...d} key={"imageList" + index} className="w-[34%]" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
