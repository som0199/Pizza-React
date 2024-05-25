import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./PizzaSlice";
import CartReducer from "./CartSlice";
export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
    cart: CartReducer,
  },
});
