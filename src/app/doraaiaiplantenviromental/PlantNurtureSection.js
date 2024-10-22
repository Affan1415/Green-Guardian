import { Heading } from "../../components";
import DoraAIAIPlantEnviromentalImageitem from "../../components/DoraAIAIPlantEnviromentalImageitem";
import React, { Suspense } from "react";

const growthTipsList = [
  { image: "img_image_2.png", growwithconfide: "Grow with Confidence", cultivateyourgr: "Cultivate Your Green Oasis" },
  { image: "img_image_3.png", growwithconfide: "Thrive Effortlessly", cultivateyourgr: "Unlock Your Plants' Potential" },
  { image: "img_image_4.png", growwithconfide: "Flourish in Style", cultivateyourgr: "Endless Possibilities" },
];

export default function PlantNurtureSection() {
  return (
    <>
      {/* plant nurture section */}
      <div>
        <div className="flex justify-center bg-gray-50_02 py-[92px] md:py-5">
          <div className="container-xs mt-2 flex justify-center md:px-5">
            <div className="flex w-full flex-col gap-[54px] sm:gap-[27px]">
              <div className="flex justify-center px-14 md:px-5">
                <Heading
                  size="heading3xl"
                  as="h2"
                  className="font-nunito text-[67px] font-semibold italic text-blue_gray-900_04 md:text-[48px]"
                >
                  Nurture Your Plants
                </Heading>
              </div>
              <div className="flex gap-12 md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {growthTipsList.map((d, index) => (
                    <DoraAIAIPlantEnviromentalImageitem {...d} key={"imageList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
