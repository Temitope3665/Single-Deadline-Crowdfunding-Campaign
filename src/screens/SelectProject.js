import { Box, Flex, Image, Text } from "@chakra-ui/react";
import bg from '../images/begin-bg.png'
import projectImg from '../images/project-one.png';

const SelectProject = ({ viewProject, accountBal }) => {
    return (
        <Box h="100vh">
            <Flex>
                <Box w="45%">
                    <Box pos="fixed">
                        <Image h="100vh" src={bg} alt="bg" pos="relative" />
                        <Text color="brand.white" ml="90px" fontWeight="700" fontSize="80px" pos="absolute" top="35%" lineHeight="80px">
                            Select<br/>project to<br/>support
                        </Text>
                    </Box>
                </Box>
                <Box w="60%">
                    <Flex fontSize="16px" mt="35px" justifyContent="right" fontWeight="700">
                        <Text mr="180px" _hover={{ color: 'brand.primary' }} cursor="pointer">Back a Project</Text>
                        <Flex mr="50px">
                            <Text>Current Bal: </Text>
                            <Text color="brand.primary" ml="10px">{accountBal} ALGO</Text>
                        </Flex>
                    </Flex>

                    <Box mt="80px" overflow="scroll">
                        <Text fontSize="18px" mb="30px">Click on project to view more</Text>
                        <Box cursor="pointer" onClick={viewProject}>
                            <Image src={projectImg} alt="project" pos="relative" />
                            <Text pos="absolute" fontSize="24px" top="40%" right="30%" color="brand.primary">Project Hall of Fame</Text>
                        </Box>

                        <Box cursor="pointer" mt="50px">
                            <Image src={projectImg} alt="project" pos="relative" />
                            <Text pos="absolute" fontSize="24px" top="40%" right="30%" color="brand.primary">Project Hall of Fame</Text>
                        </Box>
                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default SelectProject;