import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import Project from '../images/project-one.png';

const ProjectDetails = ({ handleClick, backProject }) => {
    return (
        <Box m="27px 70px">
            <Flex alignItems="center" justifyContent="space-between" fontSize="16px">
                <Flex alignItems="center">
                    <Box cursor="pointer">{logo}</Box>
                    <Text ml="87px" cursor="pointer">Discover</Text>
                </Flex>
                <Flex alignItems="center">
                    <Text cursor="pointer" mr="87px" _hover={{ color: 'brand.primary' }}>Back a Project</Text>
                    <CustomButton w="140px" bg="brand.primary" hoverColor="brand.dark" color="brand.white" onClick={handleClick}>Create Project</CustomButton>
                </Flex>
            </Flex>

            <Flex mt="100px" alignItems="center">
                <Box w="50%">
                    <Image src={Project} alt="bg" />
                </Box>
                <Box ml="100px" w="50%">
                    <Text fontWeight="600" color="brand.primary" fontSize="35px">Project Hall of Fame</Text>
                    <Flex mt="31px">
                        <Box>
                            <Text color="brand.dark" fontSize="16px">Amount to be raised</Text>
                            <Text color="brand.primary" fontWeight="700">50ETH</Text>
                        </Box>
                        <Box ml="50px">
                            <Text color="brand.dark" fontSize="16px">Supporter</Text>
                            <Text color="brand.primary" fontWeight="700">5</Text>
                        </Box>
                    </Flex>
                    <Box fontSize="16px" color="brand.dark" mt="40px">
                        <Text>Project Details</Text>
                        <Text>
                            This October, take part in Witchstarter, our first open call for Magic &
                            Divination projects. To participate, launch a project in the theme of magic
                            and the occult, or discover new favorites to pledge to. We’ll give an extra
                            promotional boost to projects that follow the theme. Deck or dice, book or 
                            board game, ideas for Witchstarter projects may span any category on Kickstarter.
                            Projects started via the link in this module will automatically be tagged as Witchstarter.
                        </Text>
                    </Box>
                    <CustomButton mt="20px" bg="brand.primary" color="brand.white" hoverColor="brand.dark" onClick={backProject}>Back this Project</CustomButton>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProjectDetails;