import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <Box
      bgColor="white"
      border="1px"
      borderColor="gray.200"
      p="10px"
      display="flex"
      height="215px"
    >
      <Image src="https://i.imgur.com/Nhw4RAY.png" alt="Banner" />
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Text textAlign="center" fontSize="16px" mb="10px">
          Втілюй мрії у власний будинок мрії.
          <br /> Залиш заявку та почни творити історію свого життя
        </Text>
        <BsFillArrowDownSquareFill size={32} color="green" />
        <Button
          bgColor="green"
          borderRadius="none"
          _hover={{ bg: "#013220" }}
          mt="26px"
          color="white"
        >
          <Link to="/request">ЗАЛИШИТИ ЗАЯВКУ</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
