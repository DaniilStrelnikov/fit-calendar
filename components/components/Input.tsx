import { Box, Text, Input as InputBase } from "native-base";
import React from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  title: string;
  placeHolder?: string;
};

export const Input = ({ value, setValue, title, placeHolder }: Props) => {
  return (
    <Box mb={4}>
      <Text mb={2} ml={2} fontWeight="medium" color={"gray.700"}>
        {title}
      </Text>
      <InputBase
        placeholder={placeHolder}
        value={value}
        onChangeText={setValue}
      />
    </Box>
  );
};
