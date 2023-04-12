import { Box, ArrowBackIcon } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

export const BackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box mt={10}>
        <ArrowBackIcon size={6} />
      </Box>
    </TouchableOpacity>
  );
};
