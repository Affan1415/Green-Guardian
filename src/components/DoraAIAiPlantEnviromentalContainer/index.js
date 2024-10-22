import { Heading } from "../..";
import React from "react";

export default function DoraAIAIPlantEnviromentalContainer({
  headingfour = "Innovative Solutions",
  revolutionizeyo = "Revolutionize Your Plant's Environment with our AI-Powered Regulators",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start h-[476px] w-[50%] md:w-full md:h-auto gap-6 px-[54px] py-11 md:p-5 bg-cover bg-no-repeat`}>
      <Heading
        size="headingmd"
        as="h1"
        className="mt-[194px] w-[34%] font-nunito text-[45px] font-semibold italic leading-[120%] text-gray-50 sm:w-full sm:text-[38px]"
      >
        {headingfour}
      </Heading>
      <Heading
        as="p"
        className="w-[74%] text-[18px] font-medium leading-[166.67%] text-green-100 sm:w-full sm:text-[15px]"
      >
        {revolutionizeyo}
      </Heading>
    </div>
  );
}
