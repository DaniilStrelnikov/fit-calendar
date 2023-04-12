import { createSlice } from "@reduxjs/toolkit";

export const USERDATA = {
  name: "name",
  secondName: "secondName",
  age: "age",
  number: "number",
  height: "height",
  weight: "weight",
  landing: "landing",
};

export const initialUserData = {
  name: "",
  secondName: "",
  age: "",
  number: "",
  height: "",
  weight: "",
  landing: "",
};

//State slice
export const userSlise = createSlice({
  name: "userData",
  initialState: { user: initialUserData },
  reducers: {
    saveForm: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveForm } = userSlise.actions;

export default userSlise.reducer;
