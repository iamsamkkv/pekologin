import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillGray100: "bg-gray_100" };
const shapes = { RoundedBorder9: "rounded-radius9" };
const sizes = {
  sm: "xl:pb-[11px] 2xl:pb-[13px] pb-[16px] lg:pb-[9px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] pt-[21px] xl:px-[11px] 2xl:px-[13px] px-[16px] lg:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder9"]),
  variant: PropTypes.oneOf(["FillGray100"]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder9",
  variant: "FillGray100",
  size: "sm",
};

export { Input };
