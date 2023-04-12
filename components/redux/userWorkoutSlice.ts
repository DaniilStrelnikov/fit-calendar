import { createSlice } from "@reduxjs/toolkit";
import { generateFitCalendar } from "../helpers/GenerateFitCalendar";

const initialState = {
  workout: [],
};

//State slice
export const workoutSlise = createSlice({
  name: "userWorkout",
  initialState,
  reducers: {
    generateCalendar: (state) => {
      state.workout = generateFitCalendar();
    },
  },
});

export const { generateCalendar } = workoutSlise.actions;

export default workoutSlise.reducer;
