import { useParams } from "react-router-dom";
import { useGetHouseByIdQuery } from "../../services/houses";
import {
  Center,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  Image,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useCreateOrderMutation } from "../../services/orders";
import { useState } from "react";

const Order = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data, error, isLoading } = useGetHouseByIdQuery(id);
  const [createOrder] = useCreateOrderMutation();
  const onSubmit = async (data: any) => {
    await createOrder({ ...data, house: id });
  };
  const [activeCheckbox, setActiveCheckbox] = useState(null);

  const handleCheckboxChange = (index: any) => {
    setActiveCheckbox(index);
  };
  const [activeCheckbox2, setActiveCheckbox2] = useState(null);

  const handleCheckboxChange2 = (index: any) => {
    setActiveCheckbox2(index);
  };
  return (
    <Center>
      <Box
        height="600px"
        width="1400px"
        m="32px"
        border="1px solid"
        borderColor="gray.300"
      >
        <Box
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
            {data?.name}
          </Text>
        </Box>
        <Box p="16px" display="flex" gap="32px">
          <Box borderRight="1px solid" borderColor="gray.300" width="600px">
            <Box>
              <Image
                src={data?.preview_images[0]}
                width="550px"
                height="350px"
              />
              <Text fontSize="24px" mt="44px" ml="62px">
                Кінцева вартість проекту:{" "}
                <Box as="span" color="green" fontSize="32px">
                  {data?.price}
                </Box>{" "}
                грн
              </Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="16px">
            <Box border="1px solid" borderColor="gray.200" p="8px">
              <Text fontSize="24px">Контактні дані</Text>
              <Box display="flex" gap="16px" mt="16px">
                <Input
                  placeholder="Ім'я"
                  width="200px"
                  {...register("name", { required: true })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  width="250px"
                  {...register("email", { required: true })}
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  width="250px"
                  {...register("phone", { required: true })}
                />
              </Box>
            </Box>
            <Box border="1px solid" borderColor="gray.200" p="8px">
              <Text fontSize="24px">Форма оплати</Text>
              <Box fontSize="24px" mt="16px">
                <Box display="flex" gap="100px">
                  <Checkbox
                    isChecked={activeCheckbox === 1}
                    {...register("online_payment")}
                    onChange={() => handleCheckboxChange(1)}
                    size="lg"
                  >
                    Online оплата
                  </Checkbox>
                  <Checkbox
                    isChecked={activeCheckbox === 2}
                    {...register("money_transfer")}
                    onChange={() => handleCheckboxChange(2)}
                    size="lg"
                  >
                    Грошовий переказ
                  </Checkbox>
                </Box>
                <Box display="flex" gap="80px" mt="16px">
                  <Checkbox
                    isChecked={activeCheckbox === 3}
                    {...register("cash_method")}
                    onChange={() => handleCheckboxChange(3)}
                    size="lg"
                  >
                    Готівкою в офісі
                  </Checkbox>
                  <Checkbox
                    isChecked={activeCheckbox === 4}
                    {...register("cashless_payment")}
                    onChange={() => handleCheckboxChange(4)}
                    size="lg"
                  >
                    Безготівковий розрахунок
                  </Checkbox>
                </Box>
              </Box>
            </Box>
            <Box border="1px solid" borderColor="gray.200" p="8px">
              <Text fontSize="24px">Спосіб доставки</Text>
              <Box display="flex" gap="80px" mt="16px">
                <Checkbox
                  isChecked={activeCheckbox2 === 5}
                  {...register("courirer_delivery")}
                  onChange={() => handleCheckboxChange2(5)}
                  size="lg"
                >
                  Кур'єрська доставка
                </Checkbox>
                <Checkbox
                  isChecked={activeCheckbox2 === 6}
                  {...register("in_office")}
                  onChange={() => handleCheckboxChange2(6)}
                  size="lg"
                >
                  Отримати в офісі
                </Checkbox>
              </Box>
            </Box>
            <Box display="flex" gap="16px" alignItems="center">
              <Textarea placeholder="Коментар" size="sm" width="80%" />
              <Button
                bgColor="green"
                borderRadius="none"
                _hover={{ bg: "#013220" }}
                color="white"
                textTransform="uppercase"
                onClick={handleSubmit(onSubmit)}
              >
                Відправити
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Order;
