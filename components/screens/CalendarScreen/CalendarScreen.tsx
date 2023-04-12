import { Center, Circle, Flex, Heading, InfoIcon, Text } from "native-base";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { RootState } from "../../redux/store";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const CalendarScreen = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentCalendar, setCurrentCalendar] = useState([]);
  const [beganPosX, setBeganPosX] = useState(0);

  const calendar = useSelector((root: RootState) => root.userWorkout.workout);

  useEffect(() => {
    setCalendar(currentMonth, currentDate.getFullYear());
  }, []);

  const setCalendar = (nextMonth: number, year: number) => {
    const workout = calendar.find(
      (el) => el.month === nextMonth + 1 && el.year === year
    )?.workOutDays;

    setCurrentCalendar(workout);
  };

  const swipeMonth = (posX: number) => {
    const moveNext = beganPosX - posX > 0;
    const shouldMove = Math.abs(beganPosX - posX) > 200;

    if (!shouldMove) return;

    const nextMonth = currentMonth + (moveNext ? 1 : -1);
    currentDate.setMonth(nextMonth + 2);

    setCalendar(nextMonth, currentDate.getFullYear());
    setCurrentMonth(nextMonth);
    setCurrentDate(currentDate);
  };

  const getCalendar = () => {
    return new Array(
      new Date(2023, new Date().getMonth() + currentMonth, 0).getDate()
    ).fill("");
  };

  return (
    <Container>
      <>
        <PanGestureHandler
          onBegan={(e) => setBeganPosX(e.nativeEvent.x as number)}
          onEnded={(e) => swipeMonth(e.nativeEvent.x as number)}
        >
          <Flex flex={1} mt={12}>
            <Flex justifyContent="space-between">
              <Center mb={16}>
                <Heading>
                  {`${currentDate.getFullYear()} ${
                    monthNames[currentDate.getMonth()]
                  }`}
                </Heading>
              </Center>

              <Flex
                direction="row"
                wrap="wrap"
                justifyContent={"center"}
                mx={4}
              >
                {getCalendar().map((_, id) => (
                  <TouchableOpacity
                    key={"date" + id}
                    onPress={() =>
                      currentCalendar?.includes(id + 1) &&
                      navigation.navigate("Date", {
                        selectedDate: `${currentDate.getFullYear()} ${
                          monthNames[currentDate.getMonth()]
                        } ${id + 1}`,
                      })
                    }
                  >
                    <Circle
                      w={10}
                      h={10}
                      borderColor={
                        currentCalendar?.includes(id + 1)
                          ? "green.400"
                          : "gray.400"
                      }
                      borderWidth={2}
                      mx={2}
                      my={2}
                    >
                      <Text key={"date + 1"}>{id + 1}</Text>
                    </Circle>
                  </TouchableOpacity>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </PanGestureHandler>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Flex alignItems={"flex-end"}>
            <Circle w={20} h={20} backgroundColor="green.400" mb={10} mx={4}>
              <InfoIcon size={10} color={"white"} />
            </Circle>
          </Flex>
        </TouchableOpacity>
      </>
    </Container>
  );
};
