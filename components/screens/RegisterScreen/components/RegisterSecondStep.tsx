import { Box } from "native-base";
import React from "react";
import { Input } from "../../../components/Input";
import { initialUserData, USERDATA } from "../../../redux/userDataSlice";

type Props = {
  form: typeof initialUserData;
  setField: (field: string, value: string) => void;
};

export const RegisterSecondStep = ({ form, setField }: Props) => {
  return (
    <Box>
      <Input
        title={"Введите ваш вес"}
        value={form.weight}
        setValue={(value) => setField(USERDATA.weight, value)}
      />
      <Input
        title={"Введите ваш рост"}
        value={form.height}
        setValue={(value) => setField(USERDATA.height, value)}
      />
    </Box>
  );
};
