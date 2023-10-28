import { Box } from "@chakra-ui/react";
import ServicesList from "./ServicesList";
import Banner from "./Banner";
import HouseList from "./houses/HouseList";

const Main = () => {
  return (
    <Box bgColor="#f3f3f3" color="rgb(23, 25, 35)">
      <Box px="420px">
        <Banner />
        <ServicesList />
        <HouseList />
      </Box>
    </Box>
  );
};

export default Main;
