import { MdAddShoppingCart } from "react-icons/md";
import { HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
const ProductCard = ({ product }) => {
  return (
    <Stack alignItems="center" mb={10}>
      <Img src={product.img} alt={product.name} w={170} h={170} />
      <Text>{product.name}</Text>
      <HStack spacing={8} alignItems="center">
        <Text>{product.price}</Text>
        <Icon as={BiCart} w={6} h={6} cursor="pointer" />
      </HStack>
    </Stack>
  );
};
export default ProductCard;
