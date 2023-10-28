import { Box } from "@chakra-ui/react";
import HouseItem from "./HouseItem";
import { useGetAllHousesQuery } from "../../../services/houses";
import { House } from "../../../utils/types";

const HouseList = () => {
  const { data, error, isLoading } = useGetAllHousesQuery();
  return (
    <Box mt="24px" display="flex" flexDirection="column" gap="36px">
      {data && data.map((house: House) => <HouseItem {...house} />)}
    </Box>
  );
};

export default HouseList;
