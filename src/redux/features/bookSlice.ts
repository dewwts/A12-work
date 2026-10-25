import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      // a booking for the same venue on the same date replaces the old one
      const remainItems = state.bookItems.filter(
        (item) => !(item.venue === action.payload.venue && item.bookDate === action.payload.bookDate)
      );
      remainItems.push(action.payload);
      state.bookItems = remainItems;
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === action.payload.nameLastname &&
            item.tel === action.payload.tel &&
            item.venue === action.payload.venue &&
            item.bookDate === action.payload.bookDate
          )
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
