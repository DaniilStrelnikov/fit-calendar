import { Flex, Heading, Text } from "native-base";
import React from "react";
import { Container } from "../../components/Container";

export const DateScreen = ({ route }) => {
  const selectedDate = route.params?.selectedDate;

  return (
    <Container>
      <Flex flex={0.8} justifyContent={"center"} align={"center"}>
        <Heading>{selectedDate}</Heading>
        <Text>Сегодня амжумания</Text>
      </Flex>
    </Container>
  );
};
