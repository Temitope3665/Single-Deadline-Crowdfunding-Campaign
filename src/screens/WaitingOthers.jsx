import { Box, Flex, Text } from "@chakra-ui/react";
import { logo } from "../svg";

const WaitingOthers = ({
  accountBal, goHome,
}) => {
  return (
    <Box m={{ base: "27px 20px", lg: "27px 70px" }}>
            <Flex alignItems="center" justifyContent="space-between" fontSize="16px">
                <Flex alignItems="center">
                    <Box cursor="pointer" onClick={goHome}>{logo}</Box>
                    <Text ml={{ base: '0', lg: "87px"}} cursor="pointer">Discover</Text>
                </Flex>
                    <Flex fontSize="16px" justifyContent={{ base: 'space-between', lg: "right"}} fontWeight="700">
                            <Text mr={{ base: '0', lg: "180px"}} display={{ base: 'none', lg: 'block' }}  _hover={{ color: 'brand.primary' }} cursor="pointer">Back a Project</Text>
                            <Flex mr={{ base: '0', lg: "50px"}}>
                                <Text>Current Bal: </Text>
                                <Text color="brand.primary" ml="10px">{accountBal} ALGO</Text>
                            </Flex>
                    </Flex>
            </Flex>


      <Box mt="80px">
        <Box>Loading...</Box>
        <Text color="brand.white" fontSize="20px">
          Exercise a little patience,<br />we are waiting for a supporter to back your project.
        </Text>
        <Text color="brand.primary">NB: You will be redirected once a supporter backed your project...</Text>
      </Box>
    </Box>
  );
};

export default WaitingOthers;
