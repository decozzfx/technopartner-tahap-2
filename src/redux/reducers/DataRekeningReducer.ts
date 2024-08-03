import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { IPayloadSetDataRekeningTypes } from "src/shared/types";

const DataRekening = createSlice({
  name: "DataRekening",
  initialState: initialState,
  reducers: {
    setAddDataRekening: (
      state,
      action: PayloadAction<IPayloadSetDataRekeningTypes>
    ) => {
      const newData = [...state.listDataRekening, action.payload];
      return { ...state, listDataRekening: newData };
    },
    setEditDataRekening: (
      state,
      action: PayloadAction<IPayloadSetDataRekeningTypes>
    ) => {
      const findData = state.listDataRekening.filter(
        (data) => data.id !== action.payload.id
      );
      const newData = [...findData, action.payload];
      return { ...state, listDataRekening: newData };
    },
    setDeleteDataRekening: (
      state,
      action: PayloadAction<IPayloadSetDataRekeningTypes>
    ) => {
      const newData = state.listDataRekening.filter(
        (data) => data.id !== action.payload.id
      );
      return { ...state, listDataRekening: newData };
    },
  },
});

export const { name, actions, reducer } = DataRekening;
