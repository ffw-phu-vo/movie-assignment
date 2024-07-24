import { IUserSubmitted } from "@/api/movieApi.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// EX: Store to localStorage https://github.com/devmuhib/React-food-delivery-app/blob/main/src/store/shopping-cart/cartSlice.js#L25C14-L25C19

const getLocalStorageItems = () => {
  const userSubmittedJson =
    typeof window !== "undefined"
      ? localStorage.getItem("userSubmitted")
      : null;
  return userSubmittedJson !== null ? JSON.parse(userSubmittedJson) : [];
};

const setLocalStorageItems = (items: any) => {
  localStorage.setItem("userSubmitted", JSON.stringify(items));
};

export interface UserSubmittedState {
  UserSubmitteds: IUserSubmitted[];
}

const initialState: UserSubmittedState = {
  UserSubmitteds: getLocalStorageItems(),
};

export const userSubmittedSlice = createSlice({
  name: "userSubmitted",
  initialState,
  reducers: {
    addUserSubmitted: (state, action: PayloadAction<IUserSubmitted>) => {
      // state.UserSubmitteds.push(action.payload);
      // state.totalUserSubmitteds += 1;
      const items = getLocalStorageItems();
      items.push(action.payload);
      state.UserSubmitteds = items;
      setLocalStorageItems(items);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserSubmitted } = userSubmittedSlice.actions;

export default userSubmittedSlice.reducer;
