import { Box, Center, Text, Image, Circle } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { initialUserData, USERDATA } from "../../../redux/userDataSlice";

const images = [
  require("../../../img/run.png"),
  require("../../../img/run2.png"),
  require("../../../img/run3.png"),
];

type Props = {
  form: typeof initialUserData;
  setField: (field: string, value: string) => void;
};

export const RegisterThirdStep = ({ form, setField }: Props) => {
  return (
    <Center>
      <Text>Выберите интенсивность тренировок</Text>
      <Box flexDirection={"row"} mt={8}>
        {images.map((el, id) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={"image" + id}
            onPress={() => setField(USERDATA.landing, id.toString())}
          >
            <Circle
              borderColor={
                id.toString() === form.landing ? "green.400" : "gray.400"
              }
              borderWidth={2}
              size={"md"}
              mx={4}
            >
              <Image
                alt="image"
                source={el}
                size={"xs"}
                resizeMode={"contain"}
                tintColor={
                  id.toString() === form.landing ? "green.400" : "gray.400"
                }
              />
            </Circle>
          </TouchableOpacity>
        ))}
      </Box>
    </Center>
  );
};
