import { Box, Center, Heading, Spacer } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

type Props = {
  children: React.ReactElement;
};

export const Container = ({ children }: Props) => {
  return (
    <Box flex={1}>
      <SafeAreaView style={{ backgroundColor: "#4ade80", marginBottom: 12 }} />

      <Center>
        <Heading color="emerald.500" size={"2xl"}>
          FitApp
        </Heading>
      </Center>

      {children}
    </Box>
  );
};
