import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  games: []
};

export const gamesSlice = createSlice({
  name: "steamApi",
  initialState,
  reducers: {
    getGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const { getGames } = gamesSlice.actions;

export default gamesSlice.reducer;
