import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateOperatorList } from "./initialState";
import {
  IGetPrimaryDataResonse,
  IGetlistOperatorResponse,
} from "src/shared/types";

const DataRekening = createSlice({
  name: "OperatorList",
  initialState: initialStateOperatorList,
  reducers: {
    setOperatorListData: (
      state,
      action: PayloadAction<IGetlistOperatorResponse["data"]>
    ) => {
      const newData = action.payload;
      return { ...state, data: newData };
    },
    setPrimaryData: (state, action: PayloadAction<IGetPrimaryDataResonse>) => {
      const newData = action.payload;
      return { ...state, primaryData: newData };
    },
  },
});

export const { name, actions, reducer } = DataRekening;
