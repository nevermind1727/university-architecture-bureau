import { Box, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  BsFillTelephoneInboundFill,
  BsTelegram,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <Box
      as="nav"
      w="100%"
      position="sticky"
      bg="#171923"
      height="80px"
      display="flex"
      justifyContent="space-between"
      px={12}
      color="white"
    >
      <Box>
        <Link to="/">
          <Box height="100%" display="flex" alignItems="center">
            <Text fontSize="xl" ml={4}>
              Проектно-виробниче архітектурно-планувальне бюро <br></br>
              <Text textAlign={"center"}>(ТОВ «ПВ АПБ»)</Text>
            </Text>
          </Box>
        </Link>
      </Box>
      <Box display="flex" alignItems="center" gap="6">
        <Box display="flex" alignItems="center" gap="4">
          <Ri24HoursFill size={34} />
          <BsFillTelephoneInboundFill size={28} cursor="pointer" />
          <Text fontSize="2xl">+38(095) 601 24 61</Text>
        </Box>
        <Box display="flex" gap="2">
          <Link to="https://t.me/dmit_taran1">
            <BsTelegram size={28} cursor="pointer" />
          </Link>
          <BsFacebook size={28} cursor="pointer" />
          <BsInstagram size={28} cursor="pointer" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
