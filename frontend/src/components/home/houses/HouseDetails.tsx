import {
  Box,
  Button,
  Center,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGetHouseByIdQuery } from "../../../services/houses";
import { useState } from "react";

const HouseDetails: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetHouseByIdQuery(id);
  const [mainImage, setMainImage] = useState(data?.preview_images[0]);
  return (
    <Box mt="16px">
      <Box textAlign="center" color="#171923" fontSize="36px" fontWeight="bold">
        {data?.name}
      </Box>
      <Box
        bgColor="white"
        border="1px"
        borderColor="gray.200"
        p="10px"
        ml="36px"
        mr="36px"
      >
        <Box display="flex" gap="48px">
          <Box>
            <Image src={mainImage ?? data?.preview_images[0]} />
            <Box display="flex" mt="6px">
              {data?.preview_images.map((prv_img: string) => (
                <Image
                  src={prv_img}
                  height="60px"
                  width="100px"
                  onClick={() => setMainImage(prv_img)}
                  cursor="pointer"
                />
              ))}
            </Box>
          </Box>
          <Box>
            <Box ml="120px">
              <Text fontSize="32px" color="#171923">
                Характеристики проекту
              </Text>
              <Table variant="simple" mt="16px">
                <Tbody fontSize="24px">
                  <Tr>
                    <Td>Кубатура:</Td>
                    <Td fontWeight="bold">
                      {data?.building_footprint} м&sup2;
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Загальна площа:</Td>
                    <Td fontWeight="bold">{data?.general_square} м&sup2;</Td>
                  </Tr>
                  <Tr>
                    <Td>Житлова площа:</Td>
                    <Td fontWeight="bold">{data?.living_square} м&sup2;</Td>
                  </Tr>
                  <Tr>
                    <Td>Кілкість поверхів:</Td>
                    <Td fontWeight="bold">{data?.floor_count}</Td>
                  </Tr>
                  <Tr>
                    <Td>Висота будинку:</Td>
                    <Td fontWeight="bold">{data?.house_height} м</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box display="flex" mt="16px" gap="16px">
              {data?.project_images.map((prj_img, i) => (
                <Box>
                  <Text fontSize="18px">{i + 1} поверх:</Text>
                  <Image src={prj_img} height="250px" width="300px" />
                </Box>
              ))}
            </Box>
            <Box display="flex" gap="200px" mt="32px">
              <Text fontSize="24px">
                Ціна проекту:{" "}
                <Box as="span" color="green" fontSize="26px">
                  {data?.price}
                </Box>{" "}
                грн
              </Text>
              <Button
                size="lg"
                bgColor="green"
                color="white"
                _hover={{ bg: "#013220" }}
              >
                <Link to={`/order/${data?._id}`}>ЗАКАЗАТИ</Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HouseDetails;
