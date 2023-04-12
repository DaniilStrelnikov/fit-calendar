import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";
import userWorkoutSlice from "./userWorkoutSlice";

const store = configureStore({
  reducer: {
    userData: userDataSlice,
    userWorkout: userWorkoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
