import React from "react";

const sizes = {
  textmd: "text-[18px] font-medium",
  textlg: "text-[19px] font-medium",
  textxl: "text-[23px] font-medium md:text-[21px]",
  headingxs: "text-[24px] font-semibold md:text-[22px]",
  headings: "text-[30px] font-semibold italic md:text-[28px] sm:text-[26px]",
  headingmd: "text-[45px] font-semibold italic md:text-[41px] sm:text-[35px]",
  headinglg: "text-[52px] font-semibold md:text-[48px]",
  headingxl: "text-[63px] font-semibold italic md:text-[48px]",
  heading2xl: "text-[65px] font-semibold italic md:text-[48px]",
  heading3xl: "text-[67px] font-semibold italic md:text-[48px]",
  heading4xl: "text-[69px] font-semibold italic md:text-[48px]",
  heading5xl: "text-[74px] font-semibold italic md:text-[48px]",
};

const Heading = ({ children, className = "", size = "textmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-green-100 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
