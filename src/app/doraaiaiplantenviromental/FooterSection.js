import { Text, Img } from "../../components";
import React from "react";

export default function FooterSection() {
  return (
    <>
      {/* footer section */}
      <div className="flex flex-col items-center justify-end bg-blue_gray-900_06 py-20 md:py-5">
        <div className="container-xs mt-10 flex flex-col items-start gap-10 px-7 md:px-5">
          <Img
            src="img_logo_footer.png"
            width={96}
            height={96}
            alt="Footer Logo"
            className="h-[96px] w-[96px] object-cover"
          />
          <Text as="p" className="text-[16px] font-normal leading-[100%] text-green-100_03">
            <>
              © 2024 GreenReg, Inc.
              <br />
              All rights reserved.
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
