import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item._id === action.payload._id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       let newCart = [...state.items];
//       let itemIndex = state.items?.findIndex(
//         (item) => item?._id === action.payload._id
//       );

//       if (itemIndex >= 0) {
//         newCart?.splice(itemIndex, 1);
//         console.log(`Removed product (id: ${action.payload?.id}) from cart!`);
//       } else {
//         console.log(
//           `Can't remove product (id: ${action.payload?.id}) as it's not in the cart!`
//         );
//       }

//       state.items = newCart;
//     },
//     emptyCart: (state, action) => {
//       state.items = [];
//     },
//   },
// });

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   state.items = [...state.items, action.payload];
    // },
    // removeFromCart: (state, action) => {
    //   let newCart = [...state.items];
    //   let itemIndex = state.items?.findIndex(
    //     (item) => item?._id === action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     newCart?.splice(itemIndex, 1);
    //     console.log(`Removed product (id: ${action.payload?.id}) from cart!`);
    //   } else {
    //     console.log(
    //       `Can't remove product (id: ${action.payload?.id}) as it's not in the cart!`
    //     );
    //   }

    //   state.items = newCart;
    // },
    // emptyCart: (state, action) => {
    //   state.items = [];
    // },
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload.id
      );
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

// export const selectCartItemById = (state, id) => {
//   state.cart.items.find((item) => {
//     item._id === id;
//     console.log("Item from select cart item by id: ", id, item);
//   });
// };
export const selectCartItemById = (state, id) =>
  state.cart.items.find((item) => item._id === id);

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectQuantityById = (state, id) => {
  const item = state.cart.items.find((item) => item._id === id);
  console.log("Item from select quantity: ", item);
  return item?.quantity || 0;
};

export default cartSlice.reducer;
