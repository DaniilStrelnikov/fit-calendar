import { Box } from "native-base";
import React from "react";
import { Input } from "../../../components/Input";
import { initialUserData, USERDATA } from "../../../redux/userDataSlice";

type Props = {
  form: typeof initialUserData;
  setField: (field: string, value: string) => void;
};

export const RegisterFirstStep = ({ form, setField }: Props) => {
  return (
    <Box>
      <Input
        title={"Введите ваше имя"}
        value={form.name}
        setValue={(value) => setField(USERDATA.name, value)}
      />
      <Input
        title={"Введите вашу фамилию"}
        value={form.secondName}
        setValue={(value) => setField(USERDATA.secondName, value)}
      />
      <Input
        title={"Введите ваш возраст"}
        value={form.age}
        setValue={(value) => setField(USERDATA.age, value)}
      />
      <Input
        title={"Введите ваш номер"}
        value={form.number}
        setValue={(value) => setField(USERDATA.number, value)}
      />
    </Box>
  );
};
