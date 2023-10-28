import { List, ListItem, ListIcon, Box, Text } from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ServicesList = () => {
  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" mb="16px">
        До послуг архітектурного бюро включено:
      </Text>
      <List spacing={3} fontSize="lg">
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Підготовка і схвалення технічного завдання.
        </ListItem>
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Укладання договору на проектні роботи.
        </ListItem>
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Розробка концепції будинку, вибір стилю та планувальних рішень.
        </ListItem>
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Узгодження планів фасадів та приміщень.
        </ListItem>
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Розробка ескізного проекту, необхідного для отримання дозволу на
          будівництво.
        </ListItem>
        <ListItem>
          <ListIcon as={BsFillCheckCircleFill} color="green.500" />
          Розробка розділів проекту.
        </ListItem>
      </List>
    </Box>
  );
};

export default ServicesList;
