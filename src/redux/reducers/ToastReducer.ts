import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToast } from "src/shared/types";
import { initialStateToast } from "src/redux/reducers/initialState";

const appSlice = createSlice({
  name: "toast",
  initialState: initialStateToast,
  reducers: {
    toastAction: (state, action: PayloadAction<IToast["toast"]>) => {
      return { ...state, toast: action.payload };
    },
  },
});

export const { name, actions, reducer } = appSlice;
