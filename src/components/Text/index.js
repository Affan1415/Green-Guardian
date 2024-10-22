import React from "react";

const sizes = {
  textxs: "text-[16px] font-normal not-italic",
  texts: "text-[17px] font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-400 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
