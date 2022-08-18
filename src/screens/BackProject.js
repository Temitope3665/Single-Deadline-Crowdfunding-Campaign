import { Box, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import bg from "../images/begin-bg.png";
import TextInput from "../common/TextInput";
import { useState } from "react";

const BackProject = ({
  handleBackProject,
  accountBal,
  setAmount,
  setDetails,
  handleCancelProject,
  submitting
}) => {
  return (
    <Box h="100vh">
      <Flex>
        <Box w="45%">
          <Image h="100vh" src={bg} alt="bg" pos="relative" />
          <Text
            color="brand.white"
            ml="70px"
            fontWeight="700"
            fontSize="70px"
            pos="absolute"
            top="30%"
            lineHeight="80px"
          >
            How much
            <br />
            do you want
            <br />
            to back the
            <br />
            project
          </Text>
        </Box>
        <Box w="55%">
          <Flex
            fontSize="16px"
            mt="35px"
            justifyContent="right"
            fontWeight="700"
          >
            <Text
              mr="180px"
              _hover={{ color: "brand.primary" }}
              cursor="pointer"
            >
              Back a Project
            </Text>
            <Flex mr="50px">
              <Text>Current Bal: </Text>
              <Text color="brand.primary" ml="10px">
                {accountBal} ALGO
              </Text>
            </Flex>
          </Flex>

          <Box mt="80px" mr="50px">
            <Text fontSize="18px">Fill this form to create a project</Text>
            <form>
              <TextInput
                border="0.5px solid #23D186"
                placeholder="Input amount"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
              <Textarea
                _focus={{ border: "0.5px solid #23D186" }}
                h="200px"
                w="100%"
                mt="20px"
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Paste contract details"
              />

              <Flex>
                <CustomButton
                  w="100%"
                  mt="20px"
                  mr="30px"
                  bg="none"
                  hoverColor="brand.dark"
                  border="1px solid #23D186"
                  color="brand.primary"
                  onClick={(e) => {
                    handleCancelProject(false);
                    e.preventDefault();
                  }}
                >
                  Cancel Project
                </CustomButton>
                <CustomButton
                  w="100%"
                  mt="20px"
                  bg="brand.primary"
                  hoverColor="brand.dark"
                  color="brand.white"
                  onClick={(e) => {
                    handleBackProject(true);
                    e.preventDefault();
                  }}
                  isLoading={submitting}
                >
                  Back Project
                </CustomButton>
              </Flex>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BackProject;
