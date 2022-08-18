import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, disabled, bg, color, onClick, border, h, mr, hover, w, mt, hoverColor, isLoading }) => (
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
    disabled={disabled}
    cursor="pointer"
    type="submit"
    _disabled={{ bg: 'rgba(35, 209, 134, 0.25)', cursor: 'not-allowed', color: 'rgba(0, 0, 0, 0.2)', _hover: { color: 'rgba(0, 0, 0, 0.2)' } }}
    isLoading={isLoading}
  >
    {children}
  </Button>
);

export default CustomButton;
