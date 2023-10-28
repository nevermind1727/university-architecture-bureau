import {
  Box,
  Button,
  Center,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCreateRequestMutation } from "../../services/requests";
import { useForm } from "react-hook-form";

const RequestTab = () => {
  const [squareMeters, setSquareMeters] = useState(0);
  let [price, setPrice] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createRequest] = useCreateRequestMutation();

  const onSubmit = async (data: any) => {
    await createRequest(data);
  };

  const handleSquareMeterChange = (event: any) => {
    const newSquareMeters = parseFloat(event.target.value);
    setSquareMeters(newSquareMeters);
    const newPrice = newSquareMeters * 180;
    setPrice(newPrice);
  };
  return (
    <Center>
      <Box
        height="600px"
        width="1200px"
        m="32px"
        border="1px solid"
        borderColor="gray.300"
      >
        <Box
          width="100%"
          height="100px"
          bgColor="#171923"
          display="flex"
          alignItems="center"
        >
          <Text
            textTransform="uppercase"
            color="#a1cf00"
            fontSize="24px"
            ml="16px"
          >
            Перший крок до вашого будинку мрії! - пришліть нам свій запит
          </Text>
        </Box>
        <Box pl="16px">
          <Text fontSize="24px" mt="16px">
            Ви маєте можливість оцінити приблизну вартість проекту свого будинку
          </Text>
          <Box display="flex" gap="50px" mt="16px">
            <Box>
              <Text>Вкажіть загальну площу вашого будинку в м²</Text>
              <NumberInput defaultValue={0} min={0} step={1} width="250px">
                <NumberInputField
                  value={squareMeters}
                  {...register("general_square", { required: true })}
                  onChange={handleSquareMeterChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <Text>Приблизна вартість в грн:</Text>
              <NumberInput
                defaultValue={0}
                min={0}
                step={1}
                width="250px"
                isReadOnly
                value={Number.isNaN(price) ? 0 : price}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <Text>Кількіть поверхів:</Text>
              <NumberInput
                defaultValue={1}
                min={1}
                step={1}
                max={10}
                width="250px"
              >
                <NumberInputField
                  {...register("floor_count", { required: true })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Box>
          <Box mt="16px">
            <Input
              placeholder="Ім'я"
              size="md"
              width="250px"
              mr="110px"
              {...register("name", { required: true })}
            />
            <Input
              placeholder="Телефон"
              size="md"
              width="250px"
              mr="50px"
              type="tel"
              {...register("phone", { required: true })}
            />
            <Input
              placeholder="Email"
              size="md"
              width="250px"
              type="email"
              {...register("email", { required: true })}
            />
          </Box>
          <Box display="flex" gap="100px">
            <Textarea
              placeholder="Коментар"
              width="610px"
              mt="16px"
              style={{ height: "270px" }}
              {...register("comment", { required: true })}
            />
            <Button
              size="lg"
              bgColor="green"
              color="white"
              _hover={{ bg: "#013220" }}
              mt="240px"
              onClick={handleSubmit(onSubmit)}
            >
              ВІДПРАВИТИ
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default RequestTab;
