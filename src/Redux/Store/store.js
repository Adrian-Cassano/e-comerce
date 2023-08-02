import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "../Slice/sliceGames";

export const store = configureStore({
  reducer: {
    gamesSlice,
  },
});