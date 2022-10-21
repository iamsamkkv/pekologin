import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[21px] xl:text-[26px] 2xl:text-[30px] text-[36px]",
  h2: "font-normal lg:text-[18px] xl:text-[23px] 2xl:text-[26px] text-[32px]",
  h3: "font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] text-[24px]",
  h4: "font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] text-[20px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
