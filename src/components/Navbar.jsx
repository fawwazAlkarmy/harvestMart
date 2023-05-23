import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiCart, BiUser } from "react-icons/bi";
import { Link, Outlet, useMatch } from "react-router-dom";

const isActiveLink = (path) => {
  const match = useMatch(path);
  return !!match;
};

const Navbar = ({ displayName }) => {
  return (
    <>
      <HStack mt="8" mb="8" alignItems="center" justifyContent="space-around">
        <Link to="/" className={isActiveLink("/") ? "active-link" : ""}>
          <HStack alignItems="center" spacing="4">
            <Image src={logo} alt="logo" boxSize="50px" />
            <Text fontSize="2xl">HarvestMart</Text>
          </HStack>
        </Link>
        <HStack spacing={8}>
          <Link to="/" className={isActiveLink("/") ? "active-link" : ""}>
            <Text>Home</Text>
          </Link>
          <Link
            to="/products"
            className={isActiveLink("/products") ? "active-link" : ""}
          >
            <Text>Products</Text>
          </Link>

          <Link
            to="/login"
            className={isActiveLink("/login") ? "active-link" : ""}
          >
            <Text>Login</Text>
          </Link>
          <Link
            to="/signup"
            className={isActiveLink("/signup") ? "active-link" : ""}
          >
            <Text>Signup</Text>
          </Link>
        </HStack>
        <HStack spacing={8} alignItems="center">
          <Link to="/cart">
            <Icon as={BiCart} w={6} h={6} />
          </Link>
          {displayName ? (
            <Text>Hi {displayName} !</Text>
          ) : (
            <Icon as={BiUser} w={6} h={6} />
          )}
        </HStack>
      </HStack>
      <Outlet />
    </>
  );
};
export default Navbar;
