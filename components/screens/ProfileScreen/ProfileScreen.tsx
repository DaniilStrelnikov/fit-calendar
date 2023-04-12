import { Box, Flex } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { RootState } from "../../redux/store";

export const ProfileScreen = () => {
  const user = useSelector((root: RootState) => root.userData.user);

  return (
    <Container>
      <Flex flex={0.8} alignItems={"center"} justifyContent={"center"}>
        <Box>
          <Box>{`Имя ${user.name}`}</Box>
          <Box>{`Фамилия ${user.secondName}`}</Box>
          <Box>{`Возраст ${user.age}`}</Box>
          <Box>{`Номер телефона ${user.number}`}</Box>
          <Box>{`Рост ${user.height}`}</Box>
          <Box>{`Вес ${user.weight}`}</Box>
        </Box>
      </Flex>
    </Container>
  );
};
