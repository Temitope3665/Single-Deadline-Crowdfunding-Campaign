import { Box, Flex, Image, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import bg from '../images/begin-bg.png'
import TextInput from "../common/TextInput";

const CreateProject = ({ handleCreateProject, accountBal }) => {
    return (
        <Box h="100vh">
            <Flex>
                <Box w="45%">
                    <Image h="100vh" src={bg} alt="bg" pos="relative" />
                    <Text color="brand.white" ml="60px" fontWeight="700" fontSize="70px" pos="absolute" top="40%" lineHeight="80px">Let’s get you<br/> started</Text>
                </Box>
                <Box w="60%">
                    <Flex fontSize="16px" mt="35px" justifyContent="right" fontWeight="700">
                        <Text mr="180px" _hover={{ color: 'brand.primary' }} cursor="pointer">Back a Project</Text>
                        <Flex mr="50px">
                            <Text>Current Bal: </Text>
                            <Text color="brand.primary" ml="10px">{accountBal} ALGO</Text>
                        </Flex>
                    </Flex>

                    <Box mt="80px" mr="50px">
                        <Text fontSize="18px">Fill this form to create a project</Text>
                        <form>
                            <SimpleGrid columns="2" spacing="5">
                                <TextInput border="0.5px solid #23D186" placeholder="Input email" type="email" />
                                <TextInput border="0.5px solid #23D186" placeholder="Input project name" type="text" />
                            </SimpleGrid>
                            <SimpleGrid columns="2" spacing="10">
                                <TextInput border="0.5px solid #23D186" placeholder="Input user name" type="text" />
                                <TextInput border="0.5px solid #23D186" placeholder="Amount to be raised" type="number" />
                            </SimpleGrid>
                            <Textarea _focus={{ border: "0.5px solid #23D186" }} h="200px" w="100%" mt="20px" placeholder="Goal of the project" />
                            <CustomButton w="100%" mt="20px" bg="brand.primary" hoverColor="brand.dark" color="brand.white" onClick={handleCreateProject}>Create Project</CustomButton>
                        </form>
                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default CreateProject;