import { createSlice } from "@reduxjs/toolkit";
import { Style, myStyles } from "src/util/Styles";

interface StylesState {
  style: Style;
  showOptions: boolean;
}

export const stylesSlice = createSlice({
  name: "slice",
  initialState: {
    style: myStyles["HimenoCigarrete"],
    showOptions: false,
  } as StylesState,
  reducers: {
    changeStyle: (state, action) => {
      state.style = action.payload;
    },
    toggleShowOptions: (state) => {
      state.showOptions = !state.showOptions;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStyle, toggleShowOptions } = stylesSlice.actions;

export default stylesSlice.reducer;
