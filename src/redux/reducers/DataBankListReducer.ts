import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateBankList } from "./initialState";
import { IGetlistBankResponse } from "src/shared/types";

const DataBankList = createSlice({
  name: "BankList",
  initialState: initialStateBankList,
  reducers: {
    setBankListData: (
      state,
      action: PayloadAction<IGetlistBankResponse["data"]>
    ) => {
      const newData = action.payload;
      return { ...state, data: newData };
    },
  },
});

export const { name, actions, reducer } = DataBankList;
