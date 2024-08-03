import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateUserData } from "./initialState";
import { IAuth } from "src/shared/types";

const DataUser = createSlice({
  name: "DataUser",
  initialState: initialStateUserData,
  reducers: {
    setUserData: (state, action: PayloadAction<IAuth>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { name, actions, reducer } = DataUser;
