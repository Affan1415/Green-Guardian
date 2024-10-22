import { Text, Heading, Img } from "../..";
import React from "react";

export default function DoraAIAIPlantEnviromentalImageitem({
  image = "img_image_2.png",
  growwithconfide = "Grow with Confidence",
  cultivateyourgr = "Cultivate Your Green Oasis",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-8`}>
      <Img
        src={image}
        width={398}
        height={392}
        alt="Product Image"
        className="h-[392px] w-full rounded-[28px] object-cover"
      />
      <div className="flex flex-col items-start gap-5 self-stretch px-2.5">
        <Heading
          size="headingxs"
          as="h4"
          className="w-[40%] text-[24px] font-semibold leading-[120%] text-blue_gray-900"
        >
          {growwithconfide}
        </Heading>
        <Text
          size="texts"
          as="p"
          className="w-[32%] text-[17px] font-normal leading-[120%] text-gray-500"
        >
          {cultivateyourgr}
        </Text>
      </div>
    </div>
  );
}
