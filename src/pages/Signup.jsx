import { Button, HStack, Img, Input, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import loginImg from "../assets/login-img.png";
import { colors } from "../utils/colors";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <HStack spacing={10} mt={20} mb={20} justifyContent="space-around">
      <Stack spacing={5} alignItems="center">
        <Img src={logo} w={14} h={14} />
        <Text fontSize="2xl" fontWeight="bold">
          Create an Account
        </Text>
        <Text fontSize="xs">Please Enter your Details</Text>
        <Input placeholder="Email" size="md" />
        <Input placeholder="Password" size="md" />
        <Button
          bg={colors.primary}
          color="white"
          size="md"
          _hover={{ color: colors.primary, bg: "white" }}
          fontWeight="thin"
          w="100%"
        >
          Continue
        </Button>
        <Text>Or</Text>
        <Button
          leftIcon={<FcGoogle fontSize={20} />}
          bg={"white"}
          color={colors.primary}
          size="md"
          fontWeight="thin"
        >
          Continue with Google
        </Button>
        <Button
          leftIcon={<FaFacebook color="#1877F2" fontSize={20} />}
          bg={"white"}
          color={colors.primary}
          size="md"
          fontWeight="thin"
        >
          Continue with Facebook
        </Button>
        <Link to="/login">
          Already have an account?{" "}
          <span style={{ fontWeight: "bold" }}>Login</span>
        </Link>
      </Stack>
      <Img src={loginImg} w={450} h={450} />
    </HStack>
  );
};
export default Signup;
