import { Box, Center, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const RequestBanner = () => {
  return (
    <Center>
      <Box
        bgColor="white"
        border="1px"
        borderColor="gray.300"
        mt="16px"
        display="flex"
        gap="16px"
        p="16px"
      >
        <Image
          src="https://i.imgur.com/eMEVHxA.jpg"
          borderRight="1px solid"
          borderColor="gray.300"
          pr="8px"
        />
        <List spacing={12} fontSize="24px">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Професійна експертиза та досвід
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Індивідуальний підхід до проектів
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Якісне проектування і дизайн
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Врахування бюджету
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Зручне планування
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Енергоефективні рішення
          </ListItem>
        </List>
      </Box>
    </Center>
  );
};

export default RequestBanner;
