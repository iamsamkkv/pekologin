import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder28: "rounded-radius285" };
const variants = { FillBlack901: "bg-black_901 text-white_A700" };
const sizes = { sm: "xl:p-[11px] 2xl:p-[13px] p-[16px] lg:p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["RoundedBorder28"]),
  variant: PropTypes.oneOf(["FillBlack901"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder28",
  variant: "FillBlack901",
  size: "sm",
};

export { Button };
