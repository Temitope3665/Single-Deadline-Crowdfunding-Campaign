import { Box, Flex, Image, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import bg from '../images/begin-bg.png'
import TextInput from "../common/TextInput";
import { useState } from "react";

const CreateProject = ({ handleCreateProject, accountBal }) => {
    const [email, setEmail] = useState('');
    const [projectName, setProjectName] = useState('');
    const [userName, setUserName] = useState('');
    const [amount, setAmount] = useState('');
    const [goal, setGoal] = useState('');
    const [submitting, setSubmitting] = useState(false);

    return (
        <Box h="100vh">
            <Flex w="100%">
                <Box w="45%">
                    <Image w="550px" h="100vh" objectFit="cover" src={bg} alt="bg" pos="relative" />
                    <Text color="brand.white" ml="60px" fontWeight="700" fontSize="70px" pos="absolute" top="40%" lineHeight="80px">Let’s get you<br/> started</Text>
                </Box>
                <Box w="55%">
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
                                <TextInput border="0.5px solid #23D186" placeholder="Input email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                <TextInput border="0.5px solid #23D186" placeholder="Input project name" type="text" onChange={(e) => setProjectName(e.target.value)} />
                            </SimpleGrid>
                            <SimpleGrid columns="2" spacing="10">
                                <TextInput border="0.5px solid #23D186" placeholder="Input user name" type="text" onChange={(e) => setUserName(e.target.value)} />
                                <TextInput border="0.5px solid #23D186" placeholder="Amount to be raised" type="number" onChange={(e) => setAmount(e.target.value)} />
                            </SimpleGrid>
                            <Textarea _focus={{ border: "0.5px solid #23D186" }} h="200px" w="100%" mt="20px" placeholder="Goal of the project" onChange={(e) => setGoal(e.target.value)} />
                            <CustomButton
                                w="100%" 
                                mt="20px"
                                bg="brand.primary"
                                hoverColor="brand.dark"
                                color="brand.white"
                                disabled={!email || !projectName || !userName || !amount || !goal}
                                onClick={handleCreateProject}
                                >
                                    Create Project
                                </CustomButton>
                        </form>
                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default CreateProject;