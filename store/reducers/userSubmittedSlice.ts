import { IUserSubmitted } from "@/api/movieApi.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// EX: Store to localStorage https://github.com/devmuhib/React-food-delivery-app/blob/main/src/store/shopping-cart/cartSlice.js#L25C14-L25C19

const items =
  localStorage.getItem("userSubmitted") !== null
    ? JSON.parse(localStorage.getItem("userSubmitted"))
    : [];

export interface UserSubmittedState {
  totalUserSubmitteds: number;
  UserSubmitteds: IUserSubmitted[];
}

const initialState: UserSubmittedState = {
  totalUserSubmitteds: items.length,
  UserSubmitteds: items,
};

export const userSubmittedSlice = createSlice({
  name: "userSubmitted",
  initialState,
  reducers: {
    addUserSubmitted: (state, action: PayloadAction<IUserSubmitted>) => {
      state.UserSubmitteds.push(action.payload);
      state.totalUserSubmitteds += 1;

      localStorage.setItem(
        "userSubmitted",
        JSON.stringify(state.UserSubmitteds)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserSubmitted } = userSubmittedSlice.actions;

export default userSubmittedSlice.reducer;
