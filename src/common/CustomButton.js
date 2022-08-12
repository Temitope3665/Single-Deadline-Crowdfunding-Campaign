import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, bg, color, onClick, border, h, mr, hover, w, mt, hoverColor }) => (
  <Button
    w={w || "170px"}
    h={h || "55px"}
    bg={bg}
    color={color}
    mr={mr}
    fontWeight="400px"
    _hover={{ bg: hover, border: border, color: hoverColor || 'brand.primary' }}
    borderRadius="8px"
    onClick={onClick}
    border={border}
    mt={mt}
    type="submit"
  >
    {children}
  </Button>
);

export default CustomButton;
