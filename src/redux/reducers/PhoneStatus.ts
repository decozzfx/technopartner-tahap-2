import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStatePhoneStatus } from "./initialState";
import { IPhoneStatus } from "src/shared/types";

const PhoneStatus = createSlice({
  name: "OperatorList",
  initialState: initialStatePhoneStatus,
  reducers: {
    setOpenTimeStatus: (state, action: PayloadAction<IPhoneStatus>) => {
      const newData = action.payload.isOpenTime;
      return { ...state, isOpenTime: newData };
    },
    setOnlineStatus: (state, action: PayloadAction<IPhoneStatus>) => {
      const newData = action.payload.isOnline;
      return { ...state, isOnline: newData };
    },
  },
});

export const { name, actions, reducer } = PhoneStatus;
