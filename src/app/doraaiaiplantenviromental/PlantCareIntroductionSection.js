import { Img, Heading } from "../../components";
import React, { Suspense } from "react";

const imageGallery = [
  { firstImage: "img_imageitem.png" },
  { firstImage: "img_imageitem_436x406.png" },
  { firstImage: "img_imageitem_1.png" },
];

export default function PlantCareIntroductionSection() {
  return (
    <>
      {/* plant care introduction section */}
      <div className="flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-7 md:px-5">
          <div className="flex justify-center px-14 md:px-5">
            <Heading
              size="heading3xl"
              as="h2"
              className="font-nunito text-[67px] font-semibold italic text-blue_gray-900_05 md:text-[48px]"
            >
              Welcome to the Future of Plant Care
            </Heading>
          </div>
          <div className="flex gap-10 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {imageGallery.map((d, index) => (
                <Img
                  key={"imageList" + index}
                  src={d.firstImage}
                  width={406}
                  height={436}
                  alt="First Image"
                  className="h-[436px] w-[34%] object-contain md:w-full"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
