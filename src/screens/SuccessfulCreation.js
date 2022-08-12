import { Box, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import success from '../images/success.svg';

const SuccessfulCreation = ({ handleCopy }) => {
    return (
        <Box m="27px 70px">
            <Flex alignItems="center" justifyContent="space-between" fontSize="16px">
                <Flex alignItems="center">
                    <Box cursor="pointer">{logo}</Box>
                    <Text ml="87px" cursor="pointer">Discover</Text>
                </Flex>
                <Flex alignItems="center">
                    <Text cursor="pointer" mr="87px" _hover={{ color: 'brand.primary' }}>Back a Project</Text>
                    <CustomButton w="140px" bg="brand.primary" hoverColor="brand.dark" color="brand.white">Create Project</CustomButton>
                </Flex>
            </Flex>


            <Flex justifyContent="center" mt="20px">
                <Box>
                    <Image src={success} alt="success" />
                    <Text color="brand.primary" textAlign="center" mt="50px" fontWeight="700">Congratulations!</Text>
                    <Text textAlign="center" fontSize="16px" mt="10px">You’ve successfully created a project.
                        <br/>Watch our space more often to know the progress<br/>of your project.
                    </Text>
                    <Textarea mt="20px" readOnly border="1px solid #23D186" />
                    <CustomButton mt="20px" w="100%" bg="none" h="50px" border="1px solid #23D186" color="brand.primary" onClick={handleCopy}>Copy to clipboard</CustomButton>
                </Box>
            </Flex>
        </Box>
    )
}

export default SuccessfulCreation;