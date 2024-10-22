import { Text, Heading, Img } from "../..";
import React from "react";

export default function DoraAIAIPlantEnviromentalImageitem1({
  imagesixOne = "img_image_6.png",
  verdantGrowth = "Verdant Growth",
  lushAbundance = "Lush Abundance",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center md:w-full gap-9`}>
      <Img
        src={imagesixOne}
        width={400}
        height={392}
        alt="Primary Image"
        className="h-[392px] w-full rounded-[22px] object-cover"
      />
      <div className="flex flex-col items-center gap-3 self-stretch px-14 md:px-5">
        <Heading
          size="headingxs"
          as="h4"
          className="w-[50%] text-center text-[24px] font-semibold leading-[120%] text-blue_gray-700"
        >
          {verdantGrowth}
        </Heading>
        <Text
          size="texts"
          as="p"
          className="w-[42%] text-center text-[17px] font-normal leading-[120%] text-gray-500_01"
        >
          {lushAbundance}
        </Text>
      </div>
    </div>
  );
}
