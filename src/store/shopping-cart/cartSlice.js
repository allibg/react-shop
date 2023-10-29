import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id == newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image01:newItem.image01,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, current) =>
          total + Number(current.price) * Number(current.quantity),0
      );
    },
    removeItem:(state,action)=>{
      const id=action.payload;
      const existingItem=state.cartItems.find(item=>item.id==id);
      state.totalQuantity--;
      if(existingItem==1){
        state.cartItems=state.cartItems.find(item=>item.id!==id);
      }else{
        existingItem.quantity--;
        existingItem.totalPrice=Number(existingItem.totalPrice)-Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, current) =>
          total + Number(current.price) * Number(current.quantity),0
      );
    },
    deletItem:(state,action)=>{
      const id=action.payload;  
      const existingItem=state.cartItems.find(item=>item.id==id);
      if(existingItem){
        state.cartItems=state.cartItems.filter(item=>item.id!==id);
        state.totalQuantity=state.totalQuantity-existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, current) =>
          total + Number(current.price) * Number(current.quantity),0
      );
    }
  
  },
});
export const cartActions=cartSlice.actions;
export default cartSlice;
