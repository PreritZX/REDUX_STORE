import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

//exporting the add method
export const { add, remove } = cartSlice.actions;

//exporting the cartSlice
export default cartSlice.reducer;
