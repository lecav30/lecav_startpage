import { configureStore } from "@reduxjs/toolkit";
import stylesReducer from "../features/styles/stylesSlice";

export default configureStore({
  reducer: { styles: stylesReducer },
});
