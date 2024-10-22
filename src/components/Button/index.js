import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};

const variants = {
  fill: {
    green_500: "bg-green-500 text-green-100_04",
    green_500_02: "bg-green-500_02 text-green-100_05",
    green_500_03: "bg-green-500_03 text-green-100_07",
    green_500_01: "bg-green-500_01 text-green-100_02",
  },
};

const sizes = {
  xs: "h-[40px] px-5 text-[16px]",
  lg: "h-[78px] px-[34px] text-[17px]",
  sm: "h-[72px] px-[34px] text-[17px]",
  md: "h-[72px] px-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-semibold ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_500", "green_500_02", "green_500_03", "green_500_01"]),
};

export { Button };
