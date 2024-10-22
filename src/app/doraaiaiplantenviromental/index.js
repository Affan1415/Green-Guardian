import { Button, Heading } from "../../components";
import DoraAIAIPlantEnviromentalContainer from "../../components/DoraAIAIPlantEnviromentalContainer";
import Header from "../../components/Header";
import AIPlantCareSection from "./AIPlantCareSection";
import FooterSection from "./FooterSection";
import PlantCareIntroductionSection from "./PlantCareIntroductionSection";
import PlantNurtureSection from "./PlantNurtureSection";
import SustainableGardeningSection from "./SustainableGardeningSection";
import React from "react";

export default function DoraAIAIplantenviromentalPage() {
  return (
    <>
      <div className="w-full bg-white-a700_02">
        <div className="flex h-[1610px] flex-col items-center gap-[346px] bg-[url(/images/img_container_1.png)] bg-cover bg-no-repeat md:h-auto md:gap-[259px] sm:gap-[173px]">
          <div className="flex flex-col items-center gap-[200px] self-stretch md:gap-[150px] sm:gap-[100px]">
            <Header />
            <div className="container-xs flex flex-col items-center px-14 md:px-5">
              <div className="flex w-[74%] flex-col gap-[30px] md:w-full">
                <Heading
                  size="headingxl"
                  as="h1"
                  className="text-center font-nunito text-[63px] font-semibold italic leading-[110.32%] text-white-a700_01 md:text-[48px]"
                >
                  Discover the Power of AI-Driven Plant Management
                </Heading>
                <div className="ml-[54px] mr-[60px] flex flex-col items-center gap-[38px] md:mx-0">
                  <Heading
                    as="h2"
                    className="self-stretch text-center text-[18px] font-medium leading-[175%] text-green-100_01"
                  >
                    Unlock the Secrets of Optimal Environmental Factors for Your Plants. Regulate humidity, temperature, soil moisture, and light levels with our cutting-edge technology.
                  </Heading>
                  <Button size="lg" className="min-w-[306px] rounded-[14px] px-[34px] sm:px-5">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mb-[134px] flex flex-col items-end px-8 md:px-5">
          <div className="flex w-[48%] flex-col items-start md:w-full">
            <Heading
              size="heading4xl"
              as="h2"
              className="w-[64%] font-nunito text-[69px] font-semibold italic leading-[111.59%] text-blue_gray-900_02 md:w-full md:text-[48px]"
            >
              Elevate Your Plant Care Experience
            </Heading>
            <Heading
              size="textlg"
              as="h3"
              className="mt-1 w-full text-[19px] font-medium leading-[175.44%] text-gray-600"
            >
              Effortlessly Monitor and Control the Vital Signs of Your Coriander and Mint Plants. Our intuitive platform provides real-time insights to ensure their perfect growth.
            </Heading>
            <Button size="sm" shape="round" className="mt-10 min-w-[252px] rounded-[10px] px-[34px] sm:px-5">
              Explore Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[126px] bg-white-a700 py-16 md:gap-[94px] md:py-5 sm:gap-[63px]">
          {/* plant care introduction section */}
          <PlantCareIntroductionSection />
          <div className="container-xs mb-[38px] md:px-5">
            <div className="flex gap-12 md:flex-col">
              <DoraAIAIPlantEnviromentalContainer className="rounded-[22px] bg-[url(/images/img_container_8.png)]" />
              <DoraAIAIPlantEnviromentalContainer
                headingfour="img_image_1.png"
                className="rounded-[16px] bg-[url(/images/img_container_10.png)]"
              />
            </div>
          </div>
        </div>
        {/* plant nurture section */}
        <PlantNurtureSection />
        <div className="bg-gray-50_02 py-16 md:py-5">
          {/* ai plant care section */}
          <AIPlantCareSection />
        </div>
        {/* sustainable gardening section */}
        <SustainableGardeningSection />
        {/* footer section */}
        <FooterSection />
      </div>
    </>
  );
}
