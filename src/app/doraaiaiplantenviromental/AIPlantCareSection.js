import { Text, Heading, Img, Button } from "../../components";
import React from "react";

export default function AIPlantCareSection() {
  return (
    <>
      {/* a i plant care section */}
      <div className="mt-7 flex justify-center">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex flex-1 flex-col items-start md:self-stretch">
            <Heading
              size="heading5xl"
              as="h2"
              className="w-[62%] font-nunito text-[74px] font-semibold italic leading-[110.81%] text-blue_gray-900_03 md:w-full md:text-[48px]"
            >
              Elevate Your Plant Care
            </Heading>
            <Heading
              size="textxl"
              as="h3"
              className="mt-2 w-[92%] text-[23px] font-medium leading-[149.28%] text-blue_gray-400_01 md:w-full md:text-[21px]"
            >
              Empower your Coriander and Mint plants to reach new heights with our AI-driven environmental control system. Experience the future of plant cultivation today.
            </Heading>
            <Button size="md" className="mt-[38px] min-w-[268px] rounded-[36px] px-[34px] sm:px-5">
              Join Now
            </Button>
          </div>
          <div className="flex w-[34%] flex-col items-end justify-center gap-9 md:w-full">
            <Img
              src="img_image_5.png"
              width={400}
              height={398}
              alt="Feature Image"
              className="h-[398px] w-[88%] rounded-[10px] object-contain"
            />
            <div className="flex flex-col items-end self-stretch pl-14 pr-16 md:px-5">
              <Heading
                size="headings"
                as="h4"
                className="font-nunito text-[30px] font-semibold italic text-gray-700 md:text-[28px] sm:text-[26px]"
              >
                Optimal Conditions
              </Heading>
              <Text size="texts" as="p" className="mr-14 text-[17px] font-normal text-blue_gray-400 md:mr-0">
                Effortless Perfection
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
