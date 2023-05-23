import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiCart, BiUser } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ displayName, setDisplayName }) => {
  const { logout, error } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setDisplayName("");
    } catch (err) {
      console.log(err);
    }
    if (error) console.log(error);

    window.location.reload();
  };

  const isActiveLink = (matchPath) => {
    return window.location.pathname === matchPath;
  };

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
          {!displayName && (
            <>
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
            </>
          )}
        </HStack>
        <HStack spacing={8} alignItems="center">
          <Link to="/cart">
            <Icon as={BiCart} w={6} h={6} />
          </Link>
          {displayName ? (
            <>
              <Text>Hi {displayName}!</Text>
              <Link to="/" onClick={handleLogout}>
                <Text>Logout</Text>
              </Link>
            </>
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
