import { Box, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiCart, BiUser } from "react-icons/bi";
import { colors } from "../utils/colors";
const Navbar = () => {
  return (
    <HStack mt="8" alignItems="center" justifyContent="space-around">
      <HStack alignItems="center" spacing="4">
        <Image src={logo} alt="logo" boxSize="50px" />
        <Text fontSize="2xl">HarvestMart</Text>
      </HStack>
      <HStack spacing={8}>
        <Text>Home</Text>
        <Text>Products</Text>
        <Text>Login</Text>
        <Text>Sign up</Text>
      </HStack>
      <HStack spacing={8} alignItems="center">
        <Box
          bg={colors.orange}
          w="12px"
          h="12px"
          borderRadius="100%"
          mt="-3"
          mr="-10"
        ></Box>
        <Icon as={BiCart} w={6} h={6} />
        <Box bg={colors.green} w="10px" h="10px" borderRadius="100%"></Box>
        <Icon as={BiUser} w={6} h={6} />
      </HStack>
    </HStack>
  );
};
export default Navbar;
