import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { FaRegRegistered } from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      as="footer"
      w="100%"
      position="sticky"
      bg="#171923"
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={12}
      color="white"
    >
      <Text>
        &copy; {new Date().getFullYear()} All rights reserved
        <Icon as={FaRegRegistered} mx={2} />
      </Text>
      <Text>
        This site is protected by reCAPTCHA and the{" "}
        <Link
          color="teal.500"
          href="https://policies.google.com/privacy"
          isExternal
        >
          Google Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          color="teal.500"
          href="https://policies.google.com/terms"
          isExternal
        >
          Terms of Service
        </Link>{" "}
        apply.
      </Text>
    </Box>
  );
};

export default Footer;
