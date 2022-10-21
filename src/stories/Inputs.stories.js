import { Input } from "components";
export default {
  title: "shyam_s_application6/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder9",
  variant: "FillGray100",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
