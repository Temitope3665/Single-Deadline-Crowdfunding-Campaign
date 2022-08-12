import { Box, FormLabel, Input } from "@chakra-ui/react";

const TextInput = ({ label, placeholder, onChange, type, w, border }) => {
    return (
        <Box mt="20px">
            <FormLabel color="brand.white">{label}</FormLabel>
            <Input boxSizing="border-box" bg="brand.white" h="55px" w={w} border={border} placeholder={placeholder} _focus={{ border }} onChange={onChange} type={type} />
        </Box>
    )
}

export default TextInput;
