import { Box, Button, Center } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BackButton } from "../../components/BackButton";
import { Container } from "../../components/Container";
import { initialUserData, saveForm } from "../../redux/userDataSlice";
import { generateCalendar } from "../../redux/userWorkoutSlice";
import { RegisterFirstStep } from "./components/RegisterFirstStep";
import { RegisterSecondStep } from "./components/RegisterSecondStep";
import { RegisterThirdStep } from "./components/RegisterThirdStep";

export const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState(initialUserData);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const changeForm = useCallback(
    (field, value) => {
      const tempForm = JSON.parse(JSON.stringify(form)); // form bug fix (remove first symbol without)
      tempForm[field] = value;
      setForm(tempForm);
    },
    [form]
  );

  const steps = [
    <RegisterFirstStep form={form} setField={changeForm} />,
    <RegisterSecondStep form={form} setField={changeForm} />,
    <RegisterThirdStep form={form} setField={changeForm} />,
  ];

  const moveStep = (isIncreced: boolean) => {
    let step = currentStep + (isIncreced ? 1 : -1);

    if (step > steps.length - 1) {
      dispatch(generateCalendar());
      dispatch(saveForm(form));

      navigation.navigate("Calendar");
      return;
    }

    step = Math.min(Math.max(step, 0), steps.length - 1);
    setCurrentStep(step);
  };

  return (
    <Container>
      <Box flex={1}>
        <Box mx={8} flexGrow={0.8} justifyContent={"center"}>
          {currentStep > 0 ? (
            <BackButton onPress={() => moveStep(false)} />
          ) : null}
          <Box flex={1} justifyContent="center">
            {steps[currentStep]}
          </Box>
        </Box>

        <Center>
          <Button onPress={() => moveStep(true)}>Продолжить</Button>

          <Box mt={10} flexDirection={"row"}>
            {new Array(steps.length).fill("").map((_, id) => (
              <Box
                key={"dot" + id}
                w={3}
                h={3}
                mx={1}
                borderRadius={100}
                backgroundColor={currentStep >= id ? "green.400" : "gray.400"}
              />
            ))}
          </Box>
        </Center>
      </Box>
    </Container>
  );
};
