import { Box, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import success from '../images/success.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toaster } from "evergreen-ui";

const SuccessfulCreation = ({ contractInfo, successMsg, accountBal, goHome }) => {
    return (
        <Box m="27px 70px">
            <Flex alignItems="center" justifyContent="space-between" fontSize="16px">
                <Flex alignItems="center">
                    <Box cursor="pointer" onClick={goHome}>{logo}</Box>
                    <Text ml="87px" cursor="pointer">Discover</Text>
                </Flex>
                <Flex alignItems="center">
                    <Flex fontSize="16px" mt="35px" justifyContent="right" fontWeight="700">
                            <Text mr="180px" _hover={{ color: 'brand.primary' }} cursor="pointer">Back a Project</Text>
                            <Flex mr="50px">
                                <Text>Current Bal: </Text>
                                <Text color="brand.primary" ml="10px">{accountBal} ALGO</Text>
                            </Flex>
                        </Flex>
                </Flex>
            </Flex>


            <Flex justifyContent="center" mt="20px">
                <Box>
                    <Image src={success} alt="success" />
                    <Text color="brand.primary" textAlign="center" mt="50px" fontWeight="700">Congratulations!</Text>
                    <Text textAlign="center" fontSize="16px" mt="10px">{successMsg} project.
                        <br/>Watch our space more often to know the progress<br/>of your project.
                    </Text>
                    <Textarea mt="20px" readOnly border="1px solid #23D186" value={contractInfo} />
                    <CopyToClipboard text={contractInfo} onCopy={() => toaster.success("contract Info copied successfully")}>
                        <CustomButton mt="20px" w="100%" bg="none" h="50px" border="1px solid #23D186" color="brand.primary">Copy to clipboard</CustomButton>
                    </CopyToClipboard>
                </Box>
            </Flex>
        </Box>
    )
}

export default SuccessfulCreation;