import { Button, Text, Img } from "../..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex self-stretch justify-center items-center py-2.5`}>
      <div className="container-xs flex justify-center px-7 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <Img
            src="img_header_logo.png"
            width={156}
            height={48}
            alt="Header Logo"
            className="h-[48px] w-[156px] object-contain"
          />
          <div className="flex w-[32%] items-center justify-center gap-[30px] md:w-full sm:flex-col">
            <div className="flex flex-1 flex-wrap justify-between gap-5 sm:self-stretch">
              <Text as="p" className="text-[16px] font-normal text-gray-400">
                Home
              </Text>
              <Text as="p" className="text-[16px] font-normal text-gray-400">
                About
              </Text>
              <Text as="p" className="text-[16px] font-normal text-gray-400">
                Plants
              </Text>
              <Text as="p" className="text-[16px] font-normal text-gray-400">
                Contact
              </Text>
            </div>
            <Button shape="round" className="min-w-[94px] rounded-[10px] px-5">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
