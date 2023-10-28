import {
  Button,
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface HouseItemProps {
  _id: string;
  name: string;
  price: number;
  preview_images: string[];
  project_images: string[];
  general_square: number;
}

const HouseItem: React.FC<HouseItemProps> = ({
  _id,
  name,
  price,
  preview_images,
  project_images,
  general_square,
}) => {
  return (
    <>
      <Card bgColor="whiteAlpha.800">
        <CardBody display="flex" gap="40px">
          <Image
            src={preview_images[0]}
            alt={name}
            borderRadius="lg"
            width="600px"
          />
          <Stack spacing="3">
            <Image src={project_images[0]} />
            <Text fontSize="18px">
              Вартість проекту:
              <Box as="span" fontSize="24px" color="green">
                {price}
              </Box>
              <Box as="span" color="green">
                {" "}
                грн
              </Box>
            </Text>
            <Text fontSize="18px">
              Площа:{" "}
              <Box as="span" fontWeight="bold">
                {general_square} м&sup2;
              </Box>
            </Text>
            <Button bgColor="green" color="white" _hover={{ bg: "#013220" }}>
              <Link to={`/houses/${_id}`}>ДЕТАЛЬНІШЕ</Link>
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default HouseItem;
