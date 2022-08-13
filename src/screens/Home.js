import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CustomButton from "../common/CustomButton";
import { logo } from "../svg";
import bg from '../images/bg.png';

const Home = ({ handleClick, supportProject, connectWallet }) => {
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

            <Flex mt="100px" alignItems="center" justifyContent="space-between">
                <Box>
                    <Text fontWeight="400" color="brand.dark" fontSize="65px">Bring your</Text>
                    <Text color="brand.primary" fontSize="100px" lineHeight="108px" fontWeight="700">Creatives</Text>
                    <Text fontWeight="400" color="brand.dark" fontSize="65px">project to live</Text>
                    <Flex mt="20px">
                        <CustomButton bg="brand.primary" mr="20px" color="brand.white" hoverColor="brand.dark" onClick={connectWallet}>Connect Wallet</CustomButton>
                        <CustomButton bg="none" border="1px solid #23D186" color="brand.dark" hoverColor="brand.primary" onClick={supportProject}>Support a Project</CustomButton>
                    </Flex>
                </Box>
                <Box>
                    <Image src={bg} alt="bg" />
                </Box>
            </Flex>
        </Box>
    )
}

export default Home;