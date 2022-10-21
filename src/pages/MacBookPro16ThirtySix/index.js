import React from "react";

import { Column, Row, Stack, Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const MacBookPro16ThirtySixPage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] pb-[1px] pr-[1px] w-[100%]">
        <Row className="items-center w-[89%]">
          <aside className="w-[7%]">
            <div className="">
              <Stack className="bg-black_900 3xl:h-[1084px] lg:h-[642px] xl:h-[803px] 2xl:h-[904px] lg:px-[22px] xl:px-[28px] 2xl:px-[31px] 3xl:px-[38px] w-[100%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="common-pointer absolute lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] inset-x-[0] mx-[auto] top-[1%] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  onClick={handleBackNavigation}
                  alt="arrowleft"
                />
              </Stack>
            </div>
          </aside>
          <Column className="3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[85px] w-[87%]">
            <Text
              className="lg:ml-[553px] xl:ml-[692px] 2xl:ml-[778px] 3xl:ml-[934px] text-black_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Let's get started
            </Text>
            <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
              <Row className="items-start ml-[4px] w-[73%]">
                <Img
                  src="images/img_asset11.png"
                  className="lg:h-[38px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[65px] w-[28%]"
                  alt="AssetEleven"
                />
                <Text
                  className="lg:ml-[298px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Personal Information
                </Text>
              </Row>
              <Row className="items-start justify-between w-[100%]">
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[37%]">
                  <Row className="items-center w-[65%]">
                    <Img
                      src="images/img_smilingbusines.png"
                      className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] rounded-radius23 w-[45%]"
                      alt="smilingbusines"
                    />
                    <Img
                      src="images/img_smartconfidenc.png"
                      className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[31px] rounded-radius23 w-[45%]"
                      alt="smartconfidenc"
                    />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]">
                    <Stack className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] mb-[1px] w-[29%]">
                      <Img
                        src="images/img_happyfreelance.png"
                        className="absolute xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] rounded-radius23 w-[100%]"
                        alt="happyfreelance"
                      />
                    </Stack>
                    <Img
                      src="images/img_cheerfulyoung.png"
                      className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] mt-[1px] rounded-radius23 w-[29%]"
                      alt="cheerfulyoung"
                    />
                    <Img
                      src="images/img_youngprettymo.png"
                      className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[147px] lg:h-[87px] mt-[1px] rounded-radius23 w-[29%]"
                      alt="youngprettymo"
                    />
                  </Row>
                </Column>
                <Column className="justify-start w-[41%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Input
                      className="placeholder:text-gray_400 GroupNine"
                      wrapClassName="w-[48%]"
                      type="text"
                      name="GroupNine"
                      placeholder="First Name"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_400 GroupNine"
                      wrapClassName="w-[48%]"
                      type="text"
                      name="GroupEight"
                      placeholder="Last Name"
                    ></Input>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                    <Input
                      className="placeholder:text-gray_400 GroupNine"
                      wrapClassName="w-[48%]"
                      name="GroupSeven"
                      placeholder="Designation"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_400 GroupNine"
                      wrapClassName="w-[48%]"
                      type="number"
                      name="GroupTwo"
                      placeholder="Phone Number"
                    ></Input>
                  </Row>
                  <Input
                    className="placeholder:text-gray_400 GroupNine"
                    wrapClassName="2xl:mt-[29px] 3xl:mt-[35px] lg:mt-[20px] w-[100%] xl:mt-[25px]"
                    type="email"
                    name="GroupSix"
                    placeholder="Email address"
                  ></Input>
                  <Text
                    className="lg:mt-[29px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[49px] text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Organisation
                  </Text>
                  <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Input
                      className="placeholder:text-gray_400 GroupNine"
                      wrapClassName="w-[48%]"
                      type="text"
                      name="GroupFive"
                      placeholder="Company Name"
                    ></Input>
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                      wrapClassName="flex w-[48%]"
                      name="GroupFour"
                      placeholder="Team Size"
                      suffix={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[2px] lg:w-[17px] lg:ml-[20px] xl:w-[22px] xl:ml-[25px] 2xl:w-[25px] 2xl:ml-[29px] 3xl:w-[30px] 3xl:ml-[35px] my-[auto]"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </Row>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[99%]">
                <Text
                  className="font-itcavantgardegothicstd leading-[normal] text-black_901 w-[42%]"
                  as="h1"
                  variant="h1"
                >
                  Streamlining business payments, expenses and corporate cards
                </Text>
                <Input
                  className="font-inter font-normal not-italic p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                  wrapClassName="flex mt-[2px] w-[42%]"
                  name="GroupThree"
                  placeholder="Company Classification"
                  suffix={
                    <Img
                      src="images/img_checkmark_31X30.svg"
                      className="mr-[2px] lg:w-[17px] lg:ml-[20px] xl:w-[22px] xl:ml-[25px] 2xl:w-[25px] 2xl:ml-[29px] 3xl:w-[30px] 3xl:ml-[35px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                ></Input>
              </Row>
              <Button className="font-normal lg:ml-[464px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[783px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[41%]">
                Next
              </Button>
              <Row className="items-start justify-end ml-[auto] lg:mt-[53px] xl:mt-[67px] 2xl:mt-[75px] 3xl:mt-[91px] w-[25%]">
                <Text
                  className="mt-[3px] not-italic text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Already have an account?
                </Text>
                <Text
                  className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Sign in
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MacBookPro16ThirtySixPage;
