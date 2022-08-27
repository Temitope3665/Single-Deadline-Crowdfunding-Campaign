import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import bg from '../images/bg.png';

const Home = ({ handleClick, supportProject, connectWallet }) => {
    return (
        <Box m={{ base: "27px 20px", lg: "27px 70px" }}>
            <Flex alignItems="center" justifyContent="space-between" fontSize="16px">
                <Flex alignItems="center">
                    <Box cursor="pointer">{logo}</Box>
                    <Text ml={{ base: '40px', lg: "87px"}} cursor="pointer">Discover</Text>
                </Flex>
                <Flex alignItems="center">
                    <Text display={{ base: 'none', lg: 'block' }} cursor="pointer" mr={{ base: '0', lg: "87px"}} _hover={{ color: 'brand.primary' }} onClick={supportProject}>Back a Project</Text>
                    <CustomButton w="140px" bg="brand.primary" hoverColor="brand.dark" color="brand.white" onClick={handleClick}>Create Project</CustomButton>
                </Flex>
            </Flex>

            <Box mt="100px" alignItems="center" justifyContent="space-between" flexDir={{ base: 'column', lg: 'row' }} display={{ base: 'block', lg: 'flex'}}>
                <Box>
                    <Text fontWeight="400" color="brand.dark" fontSize={{ base: '45px', lg: "65px" }}>Bring your</Text>
                    <Text color="brand.primary" fontSize={{ base: '60px', lg: "100px" }} lineHeight={{ base: '80px', lg: "108px" }} fontWeight="700">Creatives</Text>
                    <Text fontWeight="400" color="brand.dark" fontSize={{ base: '45px', lg: "65px" }}>project to live</Text>
                    <Flex mt="20px">
                        <CustomButton bg="brand.primary" mr="20px" color="brand.white" hoverColor="brand.dark" onClick={connectWallet}>Connect Wallet</CustomButton>
                        <CustomButton bg="none" border="1px solid #23D186" color="brand.dark" hoverColor="brand.primary" onClick={supportProject}>Back a Project</CustomButton>
                    </Flex>
                </Box>
                <Box mt={{ base: '20px', lg: '0' }}>
                    <Image src={bg} alt="bg" />
                </Box>
            </Box>
        </Box>
    )
}

export default Home;